import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  egg: { type: String, required: true },
  example: { type: String, required: true },
});

const Image = mongoose.model("Image", ImageSchema);
export default Image;
