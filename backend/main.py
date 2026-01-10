from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from db import get_conn

app = FastAPI()

# Cho frontend gọi API (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # sau này siết lại
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ALLOWED_TABLES = {"log_raw", "log_test", "log_mediumfast"}

@app.get("/api/logs")
def get_logs(
    table: str = Query("log_raw"),
    limit: int = Query(50, ge=1, le=500),
):
    if table not in ALLOWED_TABLES:
        return {"error": "invalid table"}

    conn = get_conn()
    try:
        with conn.cursor() as cur:
            # order by timestamp mới nhất (đa số bảng bạn có cột timestamp)
            cur.execute(f'SELECT * FROM {table} ORDER BY "timestamp" DESC LIMIT %s', (limit,))
            rows = cur.fetchall()
            return {"table": table, "items": rows}
    finally:
        conn.close()
