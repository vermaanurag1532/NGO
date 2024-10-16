import { connectToDatabase } from "@/lib/db";
import Contact from "@/models/Contact";
import { sendSuccessEmail } from "@/lib/emailService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const mongooseConnection = await connectToDatabase();

      const newContact = new Contact({ name, email, message });
      await newContact.save();

      const emailResult = await sendSuccessEmail(newContact, "contact");

      return res.status(200).json({
        message: "email send successfully.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
