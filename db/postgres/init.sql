CREATE TABLE nodes (
  id SERIAL PRIMARY KEY,
  short TEXT,
  longname TEXT,
  lat DOUBLE PRECISION,
  lon DOUBLE PRECISION,
  role TEXT,
  battery DOUBLE PRECISION,
  last_seen TIMESTAMPTZ
);

CREATE TABLE mesh_logs (
  id BIGSERIAL PRIMARY KEY,
  ts TIMESTAMPTZ NOT NULL,
  channel TEXT,
  node_short TEXT,
  payload TEXT
);

CREATE TABLE pax_stats (
  id BIGSERIAL PRIMARY KEY,
  ts TIMESTAMPTZ,
  node_short TEXT,
  wifi_count INT,
  ble_count INT
);
