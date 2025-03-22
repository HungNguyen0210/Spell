import express from "express";
import {
  createSpellWord,
  getAllSpellWords,
  updateSpellWord,
} from "../controllers/spell.controller.js";

const router = express.Router();

router.post("/", createSpellWord); // Thêm từ mới
router.get("/", getAllSpellWords); // Lấy danh sách từ
router.put("/:id", updateSpellWord); // Cập nhật từ

export default router;
