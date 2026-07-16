# 🚀 AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes, calculates ATS scores, extracts skills, identifies missing skills, and provides intelligent improvement suggestions using Groq LLM. Built with React, FastAPI, MongoDB Atlas, and JWT Authentication.

---

## 🌐 Live Demo

🔗 **Frontend:** https://ai-resume-analyzer-omega-self.vercel.app

💻 **GitHub Repository:** https://github.com/surajdhoundiyal344-ops/AI-Resume-Analyzer

---

## ✨ Features

- 🔐 Secure User Authentication (JWT)
- 📄 Upload Resume (PDF)
- 🤖 AI-Powered Resume Analysis
- 📊 ATS Score Calculation
- 🛠 Skill Extraction
- 📌 Missing Skills Detection
- 💡 AI Suggestions using Groq API
- ☁️ Cloud Database with MongoDB Atlas
- 📱 Fully Responsive User Interface

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- FastAPI
- Python
- JWT Authentication
- Uvicorn

### Database
- MongoDB Atlas

### AI
- Groq API (Llama Model)

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```text
AI-Resume-Analyzer
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── app
│   │   ├── config
│   │   ├── routes
│   │   ├── services
│   │   ├── schemas
│   │   └── main.py
│   │
│   ├── uploads
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/surajdhoundiyal344-ops/AI-Resume-Analyzer.git
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

```env
MONGODB_URL=your_mongodb_connection_string

DATABASE_NAME=your_database_name

JWT_SECRET_KEY=your_secret_key

GROQ_API_KEY=your_groq_api_key
```

---



## 🔮 Future Improvements

- Resume History
- Job Description Matching
- Cover Letter Generator
- Download AI-Enhanced Resume
- Resume Templates
- AI Interview Preparation

---

## 👨‍💻 Author

**Suraj Dhoundiyal**

GitHub: https://github.com/surajdhoundiyal344-ops

---

⭐ If you found this project useful, consider giving it a Star!
