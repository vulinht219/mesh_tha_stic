
DROP TABLE IF EXISTS log_mediumfast CASCADE;
DROP TABLE IF EXISTS log_test CASCADE;
DROP TABLE IF EXISTS log_raw CASCADE;
DROP TABLE IF EXISTS nodes CASCADE;

CREATE TABLE nodes (
    id SERIAL PRIMARY KEY,
    short_name TEXT,
    long_name TEXT,
    last_seen_s INTEGER,
    role TEXT,
    hw_model TEXT,
    battery_pct NUMERIC(5,2),
    voltage_v NUMERIC(5,3),
    uptime TEXT,
    channel_util NUMERIC(5,3),
    air_util_tx NUMERIC(5,3),
    latitude NUMERIC(9,6),
    longitude NUMERIC(9,6),
    altitude_m INTEGER,
    last_position_age INTEGER
);


CREATE TABLE log_raw (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
    sender_node_id INTEGER REFERENCES nodes(id) ON DELETE SET NULL,
    message TEXT NOT NULL
);


CREATE TABLE log_mediumfast (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
    sender_node_id INTEGER REFERENCES nodes(id) ON DELETE SET NULL,
    recipient_node_id INTEGER REFERENCES nodes(id) ON DELETE SET NULL,
    message TEXT NOT NULL,
    hops INTEGER,
    duration INTERVAL,
    nodecount INTEGER
);


CREATE TABLE log_test (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
    sender_node_id INTEGER REFERENCES nodes(id) ON DELETE SET NULL,
    recipient_node_id INTEGER REFERENCES nodes(id) ON DELETE SET NULL,
    message TEXT NOT NULL,
    hops INTEGER,
    duration INTERVAL,
    nodecount INTEGER
);
