# StoreZero: E-Commerce Application

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

  <p align="center">A robust e-commerce application built with **NestJS** , **Prisma** , **PostgreSQL** , and **TypeScript** . This project includes user authentication, CRUD operations, and more.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://github.com/building-for-fun/StoreZero/actions/workflows/secret-scan.yml" target="_blank"><img src="https://github.com/building-for-fun/StoreZero/actions/workflows/secret-scan.yml/badge.svg" alt="Secret Scan" /></a>

---

## 🚀 Tech Stack

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

---

## 🛠 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/building-for-fun/StoreZero.git
   cd StoreZero
   ```

Install dependencies:

  ```bash
    npm install 
  ```

Install NestJS CLI (if not already installed):

  ```bash
  npm install -g @nestjs/cli
  ```

<hr/>

🔑 Environment Variables
Copy the `.env.example` file to .env:

  ```bash
  cp .env.example .env
  ```

Update the .env file with your configuration (e.g., database URL, JWT secret, etc.).

<hr/>

▶️ Running the Application
Without Docker

Start the application:

```bash
npm run start:dev
```

The application will be available at <http://localhost:3000>.

With Docker
Build and start the Docker containers:

```bash
docker-compose up --build
```

The application will be available at <http://localhost:3000>.

<hr/>

📦 Prisma Migrations

Run Prisma migrations:

  ```bash
  npx prisma migrate dev --name <migration-name>
  ```

Generate Prisma client:

  ```bash
  npx prisma generate
  ```

<hr/>

🧪 Running Tests
Run the tests using Jest:

```bash
npm run test
```

<hr/>

📄 License
This project is licensed under the MIT License.

If you would like to contribute to the project then kindly go through [Contributing Guidelines](CONTRIBUTING.md) to understand everything from setup to necessary instructions.

<hr>
<h2 align = "center">Our Contributors ❤️</h2>
<div align = "center">
 <h3>Thank you for contributing to our repository</h3>

<p><a href="https://github.com/building-for-fun/StoreZero/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=building-for-fun/StoreZero" />
</a></p>
