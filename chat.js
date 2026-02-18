const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

const perguntas = [
  "Qual é o título da vaga e qual o propósito principal desse cargo?",
  "Qual a senioridade esperada e por quê?",
  "Quais tecnologias, frameworks e práticas são essenciais?",
  "Quais comportamentos ou atitudes são mais valorizados?"
];

let indicePergunta = 0;
let respostas = [];
let aguardandoConfirmacao = false;

// Função para adicionar mensagens no chat
function addMessage(text, type = "bot") {
  const msg = document.createElement("div");
  msg.className = type === "bot" ? "bot-message" : "user-message";
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Início da entrevista
addMessage("Olá! Vou fazer perguntas sobre a vaga que você está estruturando. Para começar: " + perguntas[indicePergunta]);

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userText = chatInput.value.trim();
  if (!userText) return;

  // Exibe resposta do usuário
  addMessage(userText, "user");
  chatInput.value = "";

  if (aguardandoConfirmacao) {
    if (userText.toLowerCase().includes("sim")) {
      gerarResumo();
    } else {
      addMessage("Ok, ajuste suas respostas e depois confirme com 'sim'.");
    }
    return;
  }

  // Salva resposta
  respostas.push(userText);

  // Avança para próxima pergunta
  indicePergunta++;
  if (indicePergunta < perguntas.length) {
    addMessage(perguntas[indicePergunta]);
  } else {
    aguardandoConfirmacao = true;
    addMessage("Recebi todas as respostas. Deseja que eu gere o resumo analítico agora? (responda 'sim' para confirmar)");
  }
});

// Função para gerar resumo com IA (opcional)
async function gerarResumoIA(respostas) {
  const prompt = `
Você é um especialista em recrutamento de tecnologia. 
Com base nas respostas abaixo, gere um resumo analítico e estruturado da vaga, incluindo título, propósito, senioridade, stack técnico, soft skills e análise final.

Respostas:
1. Título e propósito: ${respostas[0]}
2. Senioridade: ${respostas[1]}
3. Stack técnico: ${respostas[2]}
4. Soft skills: ${respostas[3]}
`;

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + CONFIG.HF_TOKEN, // token seguro vindo do config.js
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: prompt })
    });

    const data = await response.json();
    return data[0]?.generated_text || "Não foi possível gerar o resumo com IA.";
  } catch (error) {
    console.error(error);
    return "Erro ao gerar resumo com IA.";
  }
}

// Função para gerar resumo final
async function gerarResumo() {
  const resumoCard = document.createElement("div");
  resumoCard.className = "result-card fade-in";

  // Tenta gerar com IA, se falhar usa versão local
  let resumoIA = await gerarResumoIA(respostas);

  resumoCard.innerHTML = `
    <h3>📌 Resumo da Vaga</h3>
    <p>${resumoIA}</p>
    <div class="plan-actions">
      <button onclick="reiniciarEntrevista()">🔄 Reiniciar Entrevista</button>
    </div>
  `;

  chatMessages.appendChild(resumoCard);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para reiniciar entrevista
function reiniciarEntrevista() {
  indicePergunta = 0;
  respostas = [];
  aguardandoConfirmacao = false;
  chatMessages.innerHTML = "";
  addMessage("Entrevista reiniciada! Vamos começar novamente: " + perguntas[indicePergunta]);
}
