<h1 align="center">Projeto chat "Chatty"</h1>

<p align="center">
    <img src="https://img.shields.io/static/v1?label=NLW&message=05&color=8257E5&labelColor=000000" alt="NLW 05">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/DioenDJS/Projeto_Chat" >
</p>

## Tecnologias Utilizadas no projeto

- [Node.js](https://nodejs.org/en/)
- [typescript](https://www.typescriptlang.org/)
- [TYPEORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Socket.io](https://socket.io/)

## Projeto

Este projeto e um chat para atendimento de clientes em tempo real.

## Como executar

- Clone o repositório
- Caso ainda não tenha o arquivo `db.sqlite` dentro da pasta `src/database`, crie esse arquivo e rode `npm run typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `npm run dev` para iniciar a aplicação.

Ao final a aplicação estará disponível em `http://localhost:3333`.

