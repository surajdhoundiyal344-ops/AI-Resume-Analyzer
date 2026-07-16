import os
import json

from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def analyze_resume_with_ai(resume_text: str):

    prompt = f"""
You are an expert ATS Resume Analyzer.

Analyze the resume.

Return ONLY valid JSON.

{{
  "ats_score": 85,

  "breakdown": {{
      "contact": 100,
      "sections": 90,
      "skills": 80
  }},

  "skills_found": [],
  "sections_found": [],
  "suggestions": [],

  "experience": {{
      "level": "Fresher"
  }}
}}

Resume:

{resume_text}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.2,
        response_format={"type": "json_object"}
    )

    text = response.choices[0].message.content

    return json.loads(text)