import Image from "../models/image.model.js";

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Không có file nào được tải lên!" });
    }

    const { filename, mimetype, size } = req.file;
    const imageUrl = `/assets/uploads/${filename}`; // Đường dẫn file tĩnh

    const newImage = new Image({ imageUrl, filename, mimetype, size });
    await newImage.save();

    res.json({ message: "Upload thành công!", image: newImage });
  } catch (error) {
    res.status(500).json({ error: "Lỗi server!" });
  }
};

export const getAllImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadedAt: -1 }); // Lấy ảnh mới nhất trước
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server!" });
  }
};
