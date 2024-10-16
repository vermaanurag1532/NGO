import { connectToDatabase } from "@/lib/db";
import Volunteer from "@/models/Volunteer";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      const approvedCount = await Volunteer.countDocuments({
        // applicationStatus: "success",
      });

      res.status(200).json({ totalApprovedVolunteers: approvedCount });
    } catch (error) {
      console.error("Error fetching volunteer count:", error);
      res.status(500).json({ message: "Failed to fetch volunteer count" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
