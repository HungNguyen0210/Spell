import Image from "../models/image.model.js";
import SpellWord from "../models/spell.model.js";

export const createSpellWord = async (req, res) => {
  try {
    const { word, imageIds } = req.body; // Nhận từ và danh sách ảnh

    if (!word || !imageIds || !Array.isArray(imageIds)) {
      return res.status(400).json({ error: "Dữ liệu không hợp lệ!" });
    }

    // Kiểm tra ảnh có tồn tại không
    const images = await Image.find({ _id: { $in: imageIds } });

    if (images.length !== imageIds.length) {
      return res.status(400).json({ error: "Một số ảnh không tồn tại!" });
    }

    // Tạo SpellWord mới
    const newSpellWord = new SpellWord({ word, images: imageIds });
    await newSpellWord.save();

    res
      .status(201)
      .json({ message: "Thêm thành công!", spellWord: newSpellWord });
  } catch (error) {
    res.status(500).json({ error: "Lỗi server!" });
  }
};

export const getAllSpellWords = async (req, res) => {
  try {
    const spellWords = await SpellWord.find().populate("images"); // Lấy chi tiết ảnh
    res.json(spellWords);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server!" });
  }
};

export const updateSpellWord = async (req, res) => {
  try {
    const { id } = req.params;
    const { word, imageIds } = req.body;

    const spellWord = await SpellWord.findById(id);
    if (!spellWord) {
      return res.status(404).json({ error: "Từ không tồn tại!" });
    }

    if (word) spellWord.word = word;
    if (imageIds && Array.isArray(imageIds)) {
      const images = await Image.find({ _id: { $in: imageIds } });
      if (images.length !== imageIds.length) {
        return res.status(400).json({ error: "Một số ảnh không tồn tại!" });
      }
      spellWord.images = imageIds;
    }

    await spellWord.save();
    res.json({ message: "Cập nhật thành công!", spellWord });
  } catch (error) {
    res.status(500).json({ error: "Lỗi server!" });
  }
};
