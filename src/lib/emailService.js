import nodemailer from "nodemailer";

/**
 * Sends an email based on the type (donation or volunteer or contact) and their respective details.
 * @param {Object} details - Contains the details for donation or volunteer or contact
 * @param {String} type - Type of the email ('donation' or 'volunteer' or r 'contact')
 * @returns {Object} - Success or error message
 */
export async function sendSuccessEmail(details, type) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email configuration is missing");
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions;

    switch (type) {
      case "donation":
        mailOptions = generateDonationMailOptions(details);
        break;
      case "volunteer":
        mailOptions = generateVolunteerMailOptions(details);
        break;
      case "contact":
        mailOptions = generateContactMailOptions(details);
        break;
      default:
        throw new Error("Invalid email type");
    }

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Generates mail options for donation confirmation email.
 * @param {Object} donation - Donation details
 * @returns {Object} - Mail options with recipient, subject, and HTML content
 */
function generateDonationMailOptions(donation) {
  return {
    from: process.env.EMAIL_USER,
    to: donation.email,
    subject: "Thank you for your donation!",
    html: `
      <h1>Dear ${donation.name},</h1>
      <p>We have successfully received your donation of ₹${donation.donationAmount} for "${donation.donationPurpose}".</p>
      <p>Your transaction ID is <strong>${donation.razorpayPaymentId}</strong>.</p>
      <p>Thank you for your generosity!</p>
      <p>Best regards,<br/>Team Sevaarth</p>
    `,
    cc: process.env.ADMIN_EMAIL,
  };
}

/**
 * Generates mail options for volunteer signup confirmation email.
 * @param {Object} volunteer - Volunteer details
 * @returns {Object} - Mail options with recipient, subject, and HTML content
 */
function generateVolunteerMailOptions(volunteer) {
  return {
    from: process.env.EMAIL_USER,
    to: volunteer.email,
    subject: "Thank you for signing up to volunteer!",
    html: `
      <h1>Dear ${volunteer.fullName},</h1>
      <p>Thank you for expressing your interest in volunteering with us!</p>
      <p>We have successfully received your application and will contact you soon.</p>
      <p><strong>Details submitted:</strong></p>
      <ul>
        <li><strong>Areas of Interest:</strong> ${volunteer.areasOfInterest}</li>
        <li><strong>Preferred Volunteer Role:</strong> ${volunteer.preferredRole}</li>
        <li><strong>Relevant Skills:</strong> ${volunteer.skills}</li>
        <li><strong>Preferred Days:</strong> ${volunteer.preferredDays}</li>
        <li><strong>Designation:</strong> ${volunteer.designation}</li>
      </ul>
      <p>Best regards,<br/>Team Sevaarth</p>
    `,
    cc: process.env.ADMIN_EMAIL,
  };
}

/**
 * Generates mail options for contact confirmation email.
 * @param {Object} contact - Contact details
 * @returns {Object} - Mail options with recipient, subject, and HTML content
 */
function generateContactMailOptions(contact) {
  return {
    from: process.env.EMAIL_USER,
    to: contact.email,
    subject: "Sevaarth - Contact Form Submission Received",
    html: `
        <h1>Dear ${contact.name},</h1>
        <p>Thank you for reaching out! We have received your message and will get back to you shortly.</p>
        <p>Best regards,<br/>Team Sevaarth</p>
      `,
    cc: process.env.ADMIN_EMAIL,
  };
}
