# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# Site de Venda de Livros

## Descrição do Projeto

O projeto consiste em um **site de venda de livros** com funcionalidades de cadastro, exibição e gerenciamento de livros, com uma interface moderna e responsiva. O site permite que os usuários cadastrem novos livros e visualizem os livros disponíveis na loja, incluindo detalhes como nome, descrição e preço.

## Funcionalidades Implementadas

### 1. **Cadastro de Livros**
   - Permite que os administradores cadastrem livros, informando nome, descrição, preço e imagem do livro.
   - Formulário de cadastro com validação de campos obrigatórios.
   
### 2. **Exibição dos Livros**
   - Lista os livros cadastrados em formato de grade, com destaque para a imagem do livro, título e preço.
   - Os livros são exibidos lado a lado de forma responsiva.
   
### 3. **Responsividade**
   - O site é totalmente responsivo, com a interface adaptando-se bem para diferentes tamanhos de tela (desktop, tablet e celular).

### 4. **Navegação**
   - Cabeçalho fixo com links para acessar as páginas de cadastro e lista de livros.

### 5. **Design**
   - Layout moderno e clean, com paleta de cores sóbria, focada na experiência do usuário.
   
## Tecnologias Utilizadas

- **React**: Framework para construção da interface de usuário.
- **React Router**: Biblioteca para gerenciamento de rotas no React.
- **CSS**: Estilos aplicados para o layout e design da aplicação.
- **Flexbox e Grid**: Usados para o layout responsivo e exibição das listas de livros.

## Instruções para Rodar o Projeto Localmente

1. **Clone o repositório**
   - Primeiro, faça o clone do repositório para sua máquina local:
     ```bash
     ```

2. **Instale as dependências**
   - Navegue até a pasta do projeto:
     ```bash
     cd nome-do-repositorio
     ```
   - Instale as dependências usando o npm:
     ```bash
     npm install
     ```

3. **Rodando a aplicação**
   - Para rodar o projeto localmente, execute:
     ```bash
     npm start
     ```

4. **Rodando o servidor de desenvolvimento**
   - Caso precise rodar um servidor para API de back-end (se tiver), siga as instruções específicas do back-end (se necessário).

## Descrição do Tema

O tema escolhido é **"Site de Venda de Livros"**. A ideia é criar uma plataforma simples e intuitiva para compra de livros. O foco principal é proporcionar uma navegação fácil e agradável, com funcionalidades de cadastro e exibição de livros de forma clara e acessível. A escolha do tema visa atender ao público interessado em livros e facilitar a compra online.

### Funcionalidades Implementadas:

- **Página de Listagem de Livros**:
  - Exibe uma lista de livros com detalhes como título, descrição, preço e imagem.
  - Responsividade, para que o layout seja adequado a diferentes dispositivos (desktop, tablet, celular).
  
- **Página de Cadastro de Livros**:
  - Um formulário para os administradores cadastrarem novos livros.
  - Validação básica dos campos para garantir que os dados necessários sejam preenchidos.

### Tecnologias Utilizadas:
- **Frontend**: React, React Router, CSS
- **Backend**: (Caso haja um back-end, explique aqui)
- **Banco de Dados**: (Caso haja um banco de dados, explique aqui)

## Diagrama de Fluxo de Dados

### Fluxo de Dados entre Frontend e Backend

```plaintext
+------------------+          +-------------------+
|                  |          |                   |
|    Frontend      |          |    Backend        |
|                  |          |                   |
+------------------+          +-------------------+
        |                           |
        | Requisição HTTP (POST)    |
        |-------------------------->|
        |                           |
        | Cadastro de livros        | 
        |                           |
        | <--------------------------|
        |                           |
        | Dados persistidos         |
        |                           |
        | Requisição HTTP (GET)     |
        |-------------------------->|
        |                           |
        | Listagem de livros        |
        |                           |
        | <--------------------------|
        |                           |
        | Dados para exibição       |
+------------------+          +-------------------+
|                  |          |                   |
|   Frontend      |          |     Backend       |
|                  |          |                   |
+------------------+          +-------------------+
