from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config.database import db
from app.routes.auth_routes import router as auth_router
from app.routes.resume_routes import router as resume_router

app = FastAPI(title="AI Resume Analyzer API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(resume_router)


@app.get("/")
def home():
    return {
        "message": "AI Resume Analyzer API Running"
    }


@app.get("/database")
def database_status():
    db.command("ping")
    return {
        "status": "MongoDB Connected Successfully"
    }