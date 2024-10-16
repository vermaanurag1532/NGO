// models/Sponsorship.js
import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  logoUrl: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  description: { type: String },
});

export default mongoose.models.Partner ||
  mongoose.model("Partner", PartnerSchema);
