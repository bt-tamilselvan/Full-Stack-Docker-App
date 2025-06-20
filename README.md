## 🐳 Full Stack Docker App - React + Node + MongoDB

This is a full-stack Dockerized web application built with:

- ⚛️ React (Frontend)
- 🟩 Node.js + Express (Backend API)
- 🍃 MongoDB (Database)
- 🐳 Docker + Docker Compose for container orchestration

## 📦 Features

- Submit user names from frontend form
- Backend API stores and fetches users
- Mongo Express UI to manage DB visually
- Connected using Docker networks
- Environment variables managed using `.env`

## 📁 Folder Structure

```plaintext
fullstack-docker-app/
├── backend/                 # Node.js + Express backend service
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/                # React frontend application
│   ├── Dockerfile
│   ├── .env
│   └── src/
│       └── App.js
│
├── docker-compose.yml       # Orchestration file for all services
├── README.md                # Project documentation
└── screenshot.png           # UI screenshot (optional)

```markdown

---

## 🛠️ How to Run

Make sure Docker and Docker Compose are installed.

git clone https://github.com/<your-username>/<your-repo>.git
cd my-html-app
docker-compose up --build

Then open:

Frontend: http://localhost:3001

Backend API: http://localhost:5000/users

MongoDB Admin UI: http://localhost:8081

---

💬 API Endpoints
POST /user – Add a user (JSON: { "name": "Selva" })

GET /users – List all users

📸 Screenshot:

![image](https://github.com/user-attachments/assets/c1eb6eb5-4817-4d6c-bc4e-2b65d21d96fe)

![image](https://github.com/user-attachments/assets/806eb655-8fe2-4379-9fd7-bec0b2bbc046)

![image](https://github.com/user-attachments/assets/60bda226-0b2c-4556-a292-c3bb53a2ce22)

![image](https://github.com/user-attachments/assets/781d0ac8-0c86-4886-87ac-e00057ab3449)

---

## 🧠 Author

**Tamilselvan.B.T**  – DevOps Engineer in the Making 🚀
Infosys | Passion for Full Stack | Loves Docker


## 💼 Portfolio Usage
This project is ideal to showcase:

Docker & DevOps knowledge

Full-stack integration

Real-world architecture (frontend-backend-database)

Environment configuration

---

### 🟢 Step 4: Git Commands to Push

Run these commands from root folder:

```bash
git init
git add .
git commit -m "Full stack Docker App - React, Node, Mongo"
git branch -M main
git remote add origin https://github.com/bt-tamilselvan/Full-Stack-Docker-App.git
git push -u origin main


📌 Replace <your-username> and <your-repo> with your actual GitHub link.



