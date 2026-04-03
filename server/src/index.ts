import "./config/dotenv.js";
import app from "./app.js";
import http from "http";
import ConnectTODB from "./database/mongo-db.js";

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectTODB();
});

export default app;
