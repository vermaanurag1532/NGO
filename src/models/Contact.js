import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
