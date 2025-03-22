import mongoose from "mongoose";

const SpellWordSchema = new mongoose.Schema({
  letter: { type: String, required: true },
  example: { type: String, required: true },
  images: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    required: true,
  }, // Liên kết đến model Image
});

const SpellWord = mongoose.model("SpellWord", SpellWordSchema);
export default SpellWord;
