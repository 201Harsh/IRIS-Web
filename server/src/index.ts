import "./config/dotenv.js";
import app from "./app.js";
import http from "http";

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {});

export default app;
