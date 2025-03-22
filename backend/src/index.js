import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import imageRoutes from "./routes/image.routes.js";
import SpellWordRoutes from "./routes/spell.route.js";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "https://babyspell.vercel.app/", // Thay bằng domain frontend thật
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(bodyParser.json());

// Định nghĩa thư mục chứa tài nguyên tĩnh
const __dirname = path.resolve();
app.use("/assets", express.static(path.join(__dirname, "public")));

app.use("/api/", imageRoutes);
app.use("/api", SpellWordRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
