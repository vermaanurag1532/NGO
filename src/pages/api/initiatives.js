import { connectToDatabase } from "@/lib/db";
import Initiative from "@/models/Initiative";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();
      const initiatives = await Initiative.find(); // Replace with your actual query
      res.status(200).json(initiatives);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch initiatives" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
