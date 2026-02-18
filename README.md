# 🧑‍💻 Estrutura Vaga Tech – Chat Entrevistador Técnico

## 🎯 Objetivo
Este projeto implementa um **chat entrevistador técnico especializado em vagas de tecnologia**.  
O objetivo é conduzir uma entrevista estruturada com o usuário para coletar informações essenciais sobre uma vaga e gerar um **resumo analítico** pronto para uso em recrutamento ou publicação.

---

## 🔑 Como funciona
O chat segue um fluxo **linear e guiado**, com quatro perguntas principais:

1. **Título da vaga e propósito principal**  
   ➝ Identifica o cargo e sua função estratégica.

2. **Senioridade esperada e justificativa**  
   ➝ Define o nível de experiência necessário e o motivo da escolha.

3. **Stack tecnológico e práticas essenciais**  
   ➝ Levanta as tecnologias, frameworks e metodologias indispensáveis.

4. **Soft Skills valorizadas**  
   ➝ Aponta os comportamentos e atitudes mais importantes para o cargo.

---

## 📌 Regras do fluxo
- Apenas **uma pergunta por vez**.  
- O resumo só é gerado após **confirmação explícita** do usuário.  
- As respostas são armazenadas e consolidadas no final.  
- O resultado aparece em um **card estilizado com efeito fade-in**.  
- Há opção de **reiniciar entrevista** sem recarregar a página.  

---

## 📊 Resultado gerado
Ao final da entrevista, o chat produz um **resumo analítico da vaga**, incluindo:

- **Título e Propósito**  
- **Senioridade**  
- **Stack Técnico**  
- **Soft Skills**  
- **Análise Final**  

Esse resumo pode ser usado diretamente como:
- Base para **descrição de vaga**.  
- Documento de apoio em **processos de recrutamento**.  
- Briefing para gestores ou equipes de RH.  

---

## 🚀 Benefícios
- Estruturação clara e organizada da vaga.  
- Entrevista guiada e sem dispersão.  
- Resumo analítico pronto para publicação.  
- Integração opcional com **IA gratuita (Hugging Face)** para enriquecer o texto automaticamente.  
- Segurança garantida: tokens e credenciais ocultos via `.gitignore`.  

---

## ⚙️ Como rodar localmente
1. Clone o repositório:
   ```bash
   git clone https://github.com/GilbertoMarques/estrutura-vaga-tech.git

2. Crie o arquivo config.js com seu token Hugging Face:
const CONFIG = {
  HF_TOKEN: "hf_SEU_TOKEN_REAL_AQUI"
};

3. Abra o index.html no navegador.

4. Responda às perguntas do chat e confirme para gerar o resumo.

## 🔒 Segurança

- O arquivo config.js com o token real não é versionado (graças ao .gitignore).

- O repositório contém apenas config.example.js como guia de configuração.

## 🌐 Acesso via GitHub Pages

Este projeto está publicado online através do GitHub Pages.
Você pode acessar o chat entrevistador técnico diretamente pelo link abaixo:

👉 Chat: https://gilbertomarques.github.io/estrutura-vaga-tech/

## ⚠️ Observação importante

- O arquivo config.js com o token real da Hugging Face não é publicado por questões de segurança.

- No GitHub Pages, o chat funciona com o resumo local (fallback).

- Para usar a IA e gerar resumos automáticos, é necessário rodar o projeto localmente com o config.js configurado.
