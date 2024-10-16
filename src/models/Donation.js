import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  donationPurpose: {
    type: String,
    required: true,
  },
  donationAmount: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    default: "",
  },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },
  emailStatus: {
    type: String,
    enum: ["pending", "sent", "failed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Donation ||
  mongoose.model("Donation", DonationSchema);
