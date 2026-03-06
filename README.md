# Testes Automatizados - Landing Page Certificação

## 📌 Objetivo

Este projeto contém testes automatizados desenvolvidos com **Cypress** para validar funcionalidades de uma landing page.

O objetivo é garantir o correto funcionamento dos principais elementos da página, como:

- Botões de navegação
- Redirecionamentos
- Validação de formulário
- Envio de dados

A automação foi desenvolvida como parte de um **teste prático para processo seletivo**.

---

# 🧰 Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js

---

# 🚀 Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/thiagomve/ps-qa-cypress.git
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Executar o Cypress

Modo interface:
```bash
npx cypress open
```
Modo headless:
```bash
npx cypress run
```

# 🧪 Cenários de teste implementados
## Validação dos botões de redirecionamento

### Testes realizados:

- Verificar se os botões existem

- Verificar se estão visíveis

- Verificar se não estão desabilitados

- Validar se possuem atributo href

- Validar redirecionamento esperado

## Validação do formulário
### Campos testados:

Nome, Telefone, Email

### Cenários automatizados:

- Formulário vazio

- Validação dos campos, ligados a obrigatoriedade e tipos de dados permitidos

- Validação se o botão Avançar permanece desabilitado conforme o cenário

- Envio do formulário

- Interceptação da requisição de envio (sendData).

- Validação do status da requisição:

    200 → envio realizado com sucesso
    403 → erro na requisição