import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { adminRotuer } from "./router/AdminRoute.js";
import { userRoute } from "./router/UserRoute.js";

app.use("/api/v1", adminRotuer);
app.use("/api/v1", userRoute);

app.use(express.static(path.join(__dirname, "../clint/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../clint/build/index.html"));
});
