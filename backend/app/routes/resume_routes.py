from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.pdf_parser import extract_text_from_pdf
from app.services.gemini_service import analyze_resume_with_ai

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    if not file.filename.lower().endswith(".pdf"):
        return {
            "message": "Only PDF files are allowed"
        }

    resume_text = extract_text_from_pdf(file_path)

    analysis = analyze_resume_with_ai(resume_text)

    print(analysis)

    return {
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "analysis": analysis
    }