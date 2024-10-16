import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Helper function to handle scroll animation
const useScrollReveal = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        } else {
          reveal.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

const PrivacyPolicy = () => {
  useScrollReveal();

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Privacy Policy
      </motion.h1>

      <div className="text-gray-800 leading-relaxed space-y-10">
        {/* Introduction Section */}
        <motion.div className="bg-white shadow-md p-6 rounded-lg border border-gray-200 reveal opacity-100 transition-all duration-500 ease-in-out">
          <p className="mb-4">
            Sevaarth Organization India is deeply grateful to all its
            supporters, including those who contribute their time, materials,
            and/or money to help us carry out our mission. We maintain strict
            privacy policies to ensure the protection and confidentiality of
            personal information collected from our supporters, whether through
            our website, mobile app, or other communication channels. This
            privacy policy outlines how we handle personal information.
          </p>
        </motion.div>

        {/* Personal Information Collection */}
        <motion.div className="reveal opacity-100 transition-all duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-600 transition-colors">
            Personal Information Collection
          </h2>
          <p className="mb-4">
            When you interact with Sevaarth Organization India, such as by
            making a donation, volunteering, attending an event, or using our
            website, we may collect personal information, including but not
            limited to your name, address, email address, phone number, and
            other relevant details.
          </p>
        </motion.div>

        {/* Use of Personal Information */}
        <motion.div className="reveal opacity-100 transition-all duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-600 transition-colors">
            Use of Personal Information
          </h2>
          <p className="mb-4">
            Sevaarth Organization India collects and uses personal information
            for the following purposes:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>To process your donations.</li>
            <li>To send you receipts and confirmation emails for donations.</li>
            <li>
              To thank you for your contributions or volunteering efforts.
            </li>
            <li>To respond to your inquiries or feedback.</li>
            <li>
              To send updates about our projects, programs, and activities.
            </li>
            <li>
              To invite you to special events or campaigns that might interest
              you.
            </li>
          </ul>
        </motion.div>

        {/* Non-Personal Information Collection */}
        <motion.div className="reveal opacity-100 transition-all duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-600 transition-colors">
            Non-Personal Information Collection
          </h2>
          <p className="mb-4">
            Sevaarth Organization India uses cookies and other technologies to
            enhance the user experience on our website. Cookies help us
            recognize your preferences, provide personalization, and facilitate
            authentication. We may also collect non-identifying information,
            such as your IP address, to analyze website traffic and improve our
            services.
          </p>
        </motion.div>

        {/* Data Security */}
        <motion.div className="reveal opacity-100 transition-all duration-700 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-600 transition-colors">
            Data Security
          </h2>
          <p className="mb-4">
            Sevaarth is committed to protecting the security and confidentiality
            of your information. We use industry-standard security measures such
            as SSL encryption to safeguard sensitive information such as credit
            card or bank details during online transactions.
          </p>
        </motion.div>

        {/* Contact Us */}
        <motion.div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 shadow-md reveal opacity-100 transition-all duration-500 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 hover:text-indigo-600 transition-colors">
            Contact Us
          </h2>
          <p className="mb-4">
            For any questions, comments, or requests to update personal
            information, please contact us at{" "}
            <a
              href="mailto:info@sevaarth.org"
              className="text-indigo-600 underline"
            >
              info@sevaarth.org
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
