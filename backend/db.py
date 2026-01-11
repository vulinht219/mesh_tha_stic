import os
import psycopg2
from psycopg2.extras import RealDictCursor

def get_conn():
    return psycopg2.connect(
        host=os.getenv("DB_HOST", "postgres"),
        user=os.getenv("DB_USER", "meshuser"),
        password=os.getenv("DB_PASSWORD", "meshpass"),
        dbname=os.getenv("DB_NAME", "meshdb"),
        cursor_factory=RealDictCursor,
    )
