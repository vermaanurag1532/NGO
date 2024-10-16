import Donation from "@/models/Donation";
import Razorpay from "razorpay";
import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, donationAmount, donationPurpose, comment } = req.body;

    try {
      const { db } = await connectToDatabase();

      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      const options = {
        amount: donationAmount * 100,
        currency: "INR",
        receipt: crypto.randomUUID(10).toString("hex"),
      };

      const order = await razorpay.orders.create(options);

      const newDonation = new Donation({
        name,
        email,
        donationPurpose,
        donationAmount,
        comment,
        razorpayOrderId: order.id,
        paymentStatus: "pending",
      });

      await newDonation.save();
      res.status(200).json({
        order_id: order.id,
        amount: order.amount,
        currency: order.currency,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
