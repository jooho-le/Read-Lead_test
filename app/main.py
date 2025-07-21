from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import books

app = FastAPI(title="Book2Tour API", version="1.0")

# CORS 설정 (프론트엔드 요청 허용)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 실제 서비스 시 origin 제한 권장
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 라우터 등록
app.include_router(books.router)
