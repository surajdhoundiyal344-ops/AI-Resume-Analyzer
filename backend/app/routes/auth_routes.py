from fastapi import APIRouter, HTTPException

from app.schemas.user_schema import UserSignup, UserLogin
from app.auth.password import hash_password, verify_password
from app.auth.jwt_handler import create_access_token
from app.config.database import users_collection

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/signup")
def signup(user: UserSignup):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    user_data = {
        "name": user.name,
        "email": user.email,
        "password": hash_password(user.password),
        "resume_uploaded": False
    }

    users_collection.insert_one(user_data)

    return {
        "message": "User registered successfully"
    }


@router.post("/login")
def login(user: UserLogin):

    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if not existing_user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if not verify_password(
        user.password,
        existing_user["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    access_token = create_access_token(
        {
            "email": existing_user["email"]
        }
    )

    return {
        "message": "Login Successful",
        "access_token": access_token,
        "token_type": "bearer"
    }