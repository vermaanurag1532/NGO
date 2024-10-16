import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    // validate: {
    //   validator: function(value) {
    //     return value < Date.now();
    //   },
    //   message: 'Date of birth must be in the past.',
    // },
  },
  volunteerReason: {
    type: String,
    required: true,
  },
  areasOfInterest: {
    type: [String],
    required: true,
  },
  volunteerRole: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
  },
  preferredDays: {
    type: [String],
  },
  designation: {
    type: String,
    default: "Volunteer",
  },
  applicationStatus: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Volunteer ||
  mongoose.model("Volunteer", VolunteerSchema);
