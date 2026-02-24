🚀 Sobre

StateCLI é uma aplicação CLI (Command Line Interface) desenvolvida com TypeScript e Zustand Vanilla para demonstrar gerenciamento de estado fora do React.

O projeto simula um sistema onde o usuário pode:

Criar um estado inicial

Visualizar os dados

Alterar qualquer propriedade dinamicamente

Persistir as mudanças em memória usando Zustand

🧱 Tecnologias

TypeScript

Node.js

Zustand (vanilla)

Readline (Node.js)

🎯 Objetivo

Demonstrar como usar Zustand como gerenciador de estado independente do React, aplicando conceitos reais como:

Store global

Atualização imutável

Acesso e modificação de estado

Tipagem forte com TypeScript

Fluxo interativo via terminal

📂 Estrutura
store/
  vars.ts

index.ts
⚙️ Como funciona

O usuário insere:

userName

password

age

Depois pode modificar qualquer valor dinamicamente.

Exemplo:

User name: Vitor
Password: 123
Age: 18

Do you want to change any information? Y
Which field do you want to change? age
New value: 19

🧠 Conceitos aplicados

Zustand Vanilla Store

State mutation segura

Computed keys

CLI interaction

Loop control

TypeScript keyof

Arquitetura desacoplada

👨‍💻 Autor
Vitor Losina Trevisan
