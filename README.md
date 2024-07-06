# 🔗 Encurtador de URLs

Repositório criado para o desafio de desenvolver um encurtador de URLs utilizando ReactJS, TypeScript, NodeJS, MySQL e Docker.

## 📑 Sumário

- [Requisitos](#requisitos)
- [Funcionalidades](#funcionalidades)
- [Configurações Iniciais - Backend](#configurações-iniciais---backend)
- [Rotas Backend](#rotas-backend)
- [Configurações Iniciais - Frontend](#configurações-iniciais---frontend)
- [Rotas Frontend](#rotas-frontend)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Links Úteis](#links-úteis)

## ✅ Requisitos

Para usar o encurtador, é necessário ter instalado em sua máquina:
- Docker
- NodeJS

## 🌟 Funcionalidades

- Criar links encurtados
- Visualizar a quantidade de cliques que o link gerado teve

Cada link encurtado gera um "código", e por meio deste código é possível ver quantos acessos ele teve na página.

## ⚙️ Configurações Iniciais - Backend

1. Faça um clone do projeto em sua máquina.
2. Entre na pasta e acesse o diretório `Server`:
   ```bash
   cd Server
   ```
3. Instale as dependências utilizando o comando:
   ```bash
   npm install
   ```
4. Inicie o Prisma:
   ```bash
   npx prisma init --datasource-provider mysql
   ```
5. Configure o Docker com o MySQL:
   ```bash
   docker run --name mysql-database -e MYSQL_ROOT_PASSWORD=secret -d -p 3306:3306 mysql:8.0
   ```
6. Após instalar as dependências, execute os comandos para iniciar o banco de dados no Docker:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name initial
   ```
7. Execute o comando para inicializar o backend:
   ```bash
   npm run dev
   ```

## 🔀 Rotas Backend

No backend tem 3 rotas que podem ser encontradas na pasta `routes/index.ts`, sendo elas:
- `app.get("/")` - Rota raiz da aplicação
- `app.post("/api/url")` - Rota para criar URL encurtada
- `app.get("/api/:slug")` - Rota para redirecionamento por meio do slug
- `app.get("/api/clicks/:slug")` - Rota para ver a quantidade de cliques que o link encurtado teve

## ⚙️ Configurações Iniciais - Frontend

1. Entre no diretório `Client`:
   ```bash
   cd Client
   ```
2. Instale as dependências usando o comando:
   ```bash
   npm install
   ```
3. Rode o frontend com o comando:
   ```bash
   npm run dev
   ```
4. Abra a aplicação no navegador.

## 🔀 Rotas Frontend

As rotas no frontend foram criadas por meio do `react-router-dom`. No frontend tem 2 rotas que podem ser encontradas no arquivo `src/routers.jsx`, sendo elas:
- `path='/'` - Rota raiz que tem como página a Home
- `path='/buscarurl'` - Rota criada para o usuário conseguir pesquisar a quantidade de cliques que o link teve.

## 💻 Tecnologias Usadas

### Backend
- NodeJS com TypeScript
- Express
- Prisma com MySQL
- Docker
- Body-parser
- NanoID
- Cors

### Frontend
- ReactJS + Vite
- React Router DOM para as rotas do frontend

## 🔗 Links Úteis

1. [NanoID](https://github.com/ai/nanoid)
2. [React Router](https://github.com/remix-run/react-router)
3. [Documentação do React Router](https://reactrouter.com/en/main)
4. [Guia do Vite](https://pt.vitejs.dev/guide/)
5. [Documentação do Prisma](https://www.prisma.io/docs/getting-started)
6. [Documentação sobre CORS na MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
