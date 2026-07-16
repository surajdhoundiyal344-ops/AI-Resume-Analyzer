import re

from app.data.skills import COMMON_SKILLS
from app.services.experience_detector import detect_experience


def analyze_resume(text):

    resume = text.lower()

    contact_score = 0
    section_score = 0
    skills_score = 0
    resume_score = 0

    skills_found = []
    suggestions = []
    sections = []

    # ------------------------
    # EMAIL
    # ------------------------

    email_pattern = r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"

    if re.search(email_pattern, text):
        contact_score += 10
    else:
        suggestions.append("Add a professional email address.")

    # ------------------------
    # PHONE
    # ------------------------

    phone_pattern = r"\+?\d[\d\s-]{8,}"

    if re.search(phone_pattern, text):
        contact_score += 10
    else:
        suggestions.append("Add your phone number.")

    # ------------------------
    # LINKEDIN
    # ------------------------

    linkedin_pattern = r"(linkedin\.com|linkedin)"

    if re.search(linkedin_pattern, resume, re.IGNORECASE):
        contact_score += 8
    else:
        suggestions.append("Add LinkedIn profile.")

    # ------------------------
    # GITHUB
    # ------------------------

    github_pattern = r"(github\.com|github)"

    if re.search(github_pattern, resume, re.IGNORECASE):
        contact_score += 8
    else:
        suggestions.append("Add GitHub profile.")

    # ------------------------
    # RESUME SECTIONS
    # ------------------------

    section_patterns = {
        "Summary": [
            "summary",
            "professional summary",
            "profile",
            "objective"
        ],
        "Education": [
            "education",
            "academic",
            "qualification"
        ],
        "Experience": [
            "experience",
            "work experience",
            "professional experience",
            "employment",
            "internship"
        ],
        "Skills": [
            "skills",
            "technical skills",
            "technologies"
        ],
        "Projects": [
            "projects",
            "personal projects",
            "academic projects"
        ]
    }

    for section, patterns in section_patterns.items():

        found = False

        for pattern in patterns:

            if pattern in resume:
                found = True
                break

        if found:
            section_score += 8
            sections.append(section)

        else:
            suggestions.append(f"Add {section} section.")

    # ------------------------
    # SKILLS
    # ------------------------

    for skill in COMMON_SKILLS:

        if skill in resume:

            if skill not in skills_found:
                skills_found.append(skill)

    skills_score = min(len(skills_found) * 2, 30)

    if len(skills_found) < 8:
        suggestions.append(
            "Add more relevant technical skills."
        )

    # ------------------------
    # RESUME LENGTH
    # ------------------------

    words = len(text.split())

    if words >= 350:
        resume_score += 10
    else:
        suggestions.append(
            "Resume content is too short."
        )

    # ------------------------
    # EXPERIENCE DETECTOR
    # ------------------------

    experience = detect_experience(text)

    if experience["level"] == "Intern":
        resume_score += 3

    elif experience["level"] == "Junior":
        resume_score += 5

    elif experience["level"] == "Mid-Level":
        resume_score += 8

    elif experience["level"] == "Senior":
        resume_score += 10

    # ------------------------
    # FINAL SCORE
    # ------------------------

    score = (
        contact_score +
        section_score +
        skills_score +
        resume_score
    )

    score = min(score, 100)

    return {

        "ats_score": score,

        "breakdown": {
            "contact": contact_score,
            "sections": section_score,
            "skills": skills_score,
            "resume": resume_score
        },

        "experience": experience,

        "skills_found": sorted(skills_found),

        "sections_found": sections,

        "suggestions": suggestions
    }