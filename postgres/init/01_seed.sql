-- ========== NODES ==========
INSERT INTO nodes (short_name, long_name, last_seen_s, role, hw_model, battery_pct, voltage_v)
VALUES
('node1', 'Main Node',   120, 'router', 'esp32', 82.5, 3.95),
('node2', 'Backup Node',  95, 'client', 'esp32', 64.3, 3.78);

-- ========== LOG RAW ==========
INSERT INTO log_raw (sender_node_id, message) VALUES
(1, 'Node1 boot completed'),
(2, 'Node2 joined mesh network'),
(1, 'Temperature sensor: 24.1C'),
(2, 'Battery level dropped to 64%'),
(1, 'GPS position updated'),
(2, 'Sending heartbeat packet'),
(1, 'Received message from node2'),
(2, 'Firmware update started');

-- ========== LOG MEDIUMFAST ==========
INSERT INTO log_mediumfast
(sender_node_id, recipient_node_id, message, hops, duration, nodecount)
VALUES
(1, 2, 'Hello from node1 to node2', 2, INTERVAL '120 milliseconds', 5),
(2, 1, 'Reply from node2',          2, INTERVAL '95 milliseconds',  5),
(1, 2, 'Temperature update',        3, INTERVAL '180 milliseconds', 6),
(2, 1, 'Battery status report',     3, INTERVAL '160 milliseconds', 6),
(1, 2, 'GPS location data',         4, INTERVAL '240 milliseconds', 7),
(2, 1, 'Ack received',              4, INTERVAL '200 milliseconds', 7);

-- ========== LOG TEST ==========
INSERT INTO log_test
(sender_node_id, recipient_node_id, message, hops, duration, nodecount)
VALUES
(1, 2, 'TEST: handshake started',      1, INTERVAL '50 milliseconds',  3),
(2, 1, 'TEST: handshake acknowledged', 1, INTERVAL '45 milliseconds',  3),
(1, 2, 'TEST: packet loss detected',   3, INTERVAL '210 milliseconds', 5),
(2, 1, 'TEST: rerouting message',      4, INTERVAL '260 milliseconds', 6),
(1, 2, 'TEST: latency spike warning',  5, INTERVAL '350 milliseconds', 7),
(2, 1, 'TEST: network stable again',   2, INTERVAL '120 milliseconds', 4);
