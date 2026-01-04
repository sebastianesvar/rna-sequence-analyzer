from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router

app = FastAPI(
    title="RNA Sequence Analyzer API",
    description="API for analyzing and visualizing RNA sequences",
    version="1.0.0"
)

# Configurar CORS para permitir requests desde el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especifica los dominios permitidos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir las rutas de la API
app.include_router(router)

@app.get("/")
async def root():
    return {
        "message": "Welcome to RNA Sequence Analyzer API",
        "version": "1.0.0",
        "documentation": "/docs",
        "endpoints": {
            "analyze": "/api/v1/analyze",
            "gc_content": "/api/v1/gc-content",
            "composition": "/api/v1/composition",
            "reverse_transcribe": "/api/v1/reverse-transcribe",
            "translate": "/api/v1/translate"
        }
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}