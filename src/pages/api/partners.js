import { connectToDatabase } from "@/lib/db";
import Partner from "@/models/Partner";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDatabase();

      const partners = await Partner.find();
      res.status(200).json({ success: true, data: partners });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Failed to load partners" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
