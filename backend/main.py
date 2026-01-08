from fastapi import FastAPI
import psycopg2
import os

app = FastAPI()

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/db")
def test_db():
    conn = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        dbname=os.getenv("DB_NAME"),
    )
    cur = conn.cursor()
    cur.execute("SELECT 1;")
    cur.close()
    conn.close()
    return {"db": "connected"}
