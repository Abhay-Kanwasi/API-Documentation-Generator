from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="API Documentation Generator")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ApiDoc(BaseModel):
    endpoint: str
    method: str
    description: str
    parameters: Optional[List[dict]] = None

@app.get("/")
async def root():
    return {
        "status": "success",
        "message": "API Documentation Generator is running"
    }

@app.post("/api/analyze")
async def analyze_code(code: str):
    try:
        # Placeholder for NLP analysis
        # Here you would implement the actual code analysis using SpaCy/NLTK
        return {
            "status": "success",
            "documentation": {
                "endpoint": "/api/example",
                "method": "GET",
                "description": "Example API endpoint documentation",
                "parameters": [
                    {
                        "name": "param1",
                        "type": "string",
                        "description": "Example parameter"
                    }
                ]
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/docs")
async def get_docs():
    # Placeholder for getting all generated documentation
    return {
        "status": "success",
        "docs": [
            {
                "endpoint": "/api/example",
                "method": "GET",
                "description": "Example endpoint documentation"
            }
        ]
    }