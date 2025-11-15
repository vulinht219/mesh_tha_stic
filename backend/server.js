import express from "express";
import cors from "cors";
import { createServer } from "http";
import { initMQTT } from "./mqtt.js";
import { initSocket } from "./websocket.js";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
initSocket(httpServer);
initMQTT();

app.get("/api/health", (_, res) => res.json({ ok: true }));

httpServer.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
