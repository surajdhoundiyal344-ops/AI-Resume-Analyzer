import os
import json

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1",
)


def analyze_resume_ai(resume_text):

    prompt = f"""
You are an expert ATS Resume Analyzer.

Analyze this resume and return ONLY valid JSON.

Resume:

{resume_text}

Return JSON in this exact format:

{{
  "ats_score": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "missing_skills": [],
  "suggestions": [],
  "recommended_roles": []
}}

Do not return markdown.
Do not return explanation.
Only JSON.
"""

    response = client.chat.completions.create(
        model="qwen/qwen3-next-80b-a3b-instruct:free",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3,
    )

    content = response.choices[0].message.content.strip()

    return json.loads(content)