import { connectToDatabase } from "@/lib/db";
import Volunteer from "@/models/Volunteer";
import { sendSuccessEmail } from "@/lib/emailService";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      fullName,
      email,
      phoneNumber,
      city,
      dateOfBirth,
      volunteerReason,
      areasOfInterest,
      volunteerRole,
      skills,
      preferredDays,
      designation,
    } = req.body;

    try {
      // Connect to the database
      const mongooseConnection = await connectToDatabase();

      // Check if a volunteer with the same fullName, email, and phoneNumber already exists
      const existingVolunteer = await Volunteer.findOne({
        fullName,
        email,
        phoneNumber,
      });

      if (existingVolunteer) {
        // If a volunteer already exists, return a 409 conflict response
        return res.status(409).json({
          message:
            "A volunteer with this name, email, and phone number already exists.",
        });
      }

      // If no existing volunteer is found, create a new volunteer
      const newVolunteer = new Volunteer({
        fullName,
        email,
        phoneNumber,
        city,
        dateOfBirth,
        volunteerReason,
        areasOfInterest,
        volunteerRole,
        skills,
        preferredDays,
        designation,
      });

      await newVolunteer.save();

      // Send success email
      const emailResult = await sendSuccessEmail(newVolunteer, "volunteer");

      // Respond with success
      res.status(201).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ message: "Failed to submit form" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
