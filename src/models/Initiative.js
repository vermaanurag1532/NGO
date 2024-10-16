// models/Initiative.js
import mongoose from "mongoose";

const InitiativeSchema = new mongoose.Schema(
  {
    imageSrc: { type: String, required: true },
    imageAlt: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    impact: { type: String, required: true },
    location: { type: String, required: true },
    nextEvent: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.models.Initiative ||
  mongoose.model("Initiative", InitiativeSchema);
