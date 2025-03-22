import express from "express";
import upload from "../middleware/upload.js";
import { getAllImages, uploadImage } from "../controllers/image.controller.js";

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImage);
router.get("/image", getAllImages);

export default router;
