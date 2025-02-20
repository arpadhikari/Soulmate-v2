import express from "express"
import dotenv from "dotenv"

import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import matchRoutes from './routes/matchRoute.js'
import messaegRoutes from './routes/messageRoutes.js'
import {createServer} from "node:http"
import { initializeSocket } from "./socket/socket.server.js"

import { connectDB } from "./config/db.js";

dotenv.config();


const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;


initializeSocket(httpServer);

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/matches", matchRoutes)
app.use("/api/messages", messaegRoutes)


httpServer.listen(PORT, () => {
    console.log("Listening on port" + PORT);
    connectDB();
});