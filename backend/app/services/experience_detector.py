import re
from datetime import datetime


def detect_experience(text):

    resume = text.lower()

    years = 0

    # Pattern:
    # 2 years
    # 3+ years
    # 5 yrs

    matches = re.findall(
        r"(\d+)\+?\s*(?:years|year|yrs|yr)",
        resume
    )

    if matches:
        years = max(int(x) for x in matches)

    # Internship detection

    internship = any(
        word in resume
        for word in [
            "intern",
            "internship"
        ]
    )

    if years == 0:

        if internship:

            level = "Intern"

        else:

            level = "Fresher"

    elif years <= 2:

        level = "Junior"

    elif years <= 5:

        level = "Mid-Level"

    else:

        level = "Senior"

    return {

        "years": years,

        "level": level
    }