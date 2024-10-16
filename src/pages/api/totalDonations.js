import { connectToDatabase } from "@/lib/db";
import Donation from "@/models/Donation";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { db } = await connectToDatabase();

      const donations = await Donation.aggregate([
        {
          $match: {
            paymentStatus: "success",
          },
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$donationAmount" },
            donations: {
              $push: {
                donorName: "$donorName",
                donationPurpose: "$donationPurpose",
                donationAmount: "$donationAmount",
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            totalAmount: 1,
            donations: 1,
          },
        },
      ]);

      const result =
        donations.length > 0 ? donations[0] : { totalAmount: 0, donations: [] };

      res.status(200).json(result);
    } catch (error) {
      console.error("Error fetching donations:", error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
