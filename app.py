from fastapi import FastAPI

app = FastAPI(title="DFMS PaddleOCR API")


@app.get("/")
def home():
    return {
        "status": "running",
        "message": "DFMS PaddleOCR API"
    }
