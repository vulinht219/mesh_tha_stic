CREATE TABLE IF NOT EXISTS nodes (
  id SERIAL PRIMARY KEY,
  short_name TEXT,
  long_name TEXT,
  last_seen_s INTEGER,
  latitude NUMERIC,
  longitude NUMERIC
);

CREATE TABLE IF NOT EXISTS log_raw (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP DEFAULT now(),
  sender_node_id INTEGER,
  message TEXT
);

CREATE TABLE IF NOT EXISTS log_mediumfast (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP DEFAULT now(),
  sender_node_id INTEGER,
  message TEXT
);

CREATE TABLE IF NOT EXISTS log_test (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP DEFAULT now(),
  sender_node_id INTEGER,
  message TEXT
);

CREATE TABLE IF NOT EXISTS paxcounter (
  id SERIAL PRIMARY KEY,
  location TEXT,
  wifi_count INTEGER,
  bluetooth_count INTEGER,
  timestamp TIMESTAMP DEFAULT now()
);
