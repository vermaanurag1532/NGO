import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// FAQ Page Component
const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Sevaarth Organization India?",
      answer:
        "Sevaarth Organization India is a nonprofit focused on uplifting underserved communities, including the elderly, children, and women, while promoting environmental sustainability through various initiatives.",
    },
    {
      question: "How can I make a donation to Sevaarth?",
      answer:
        "You can donate through our website by clicking the 'Donate' button on the homepage. We accept multiple forms of payment, and all donations are tax-deductible under Section 80G of the Income Tax Act, 1961.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, donations made to Sevaarth are tax-deductible under Section 80G. You will receive a receipt via email that can be used for tax purposes.",
    },
    {
      question: "What is Sevaarth’s refund policy for donations?",
      answer:
        "If an unintended donation is made, you can request a refund by emailing us within [number of days] from the transaction. Please provide your donation receipt for verification.",
    },
    {
      question: "How do I get involved in volunteering with Sevaarth?",
      answer:
        "You can sign up to volunteer through our 'Get Involved' page. Simply fill out the volunteer form, and we’ll reach out to you with opportunities.",
    },
    {
      question: "What types of personal information does Sevaarth collect?",
      answer:
        "We collect personal details like your name, email address, and phone number when you make a donation, volunteer, or interact with us. This information helps us process your donation, send you updates, and respond to your queries.",
    },
    {
      question: "Will my personal information be shared with others?",
      answer:
        "No, your personal information will never be shared or sold to third parties, except when required to process your donation or as required by law.",
    },
    {
      question:
        "How does Sevaarth ensure the security of my personal information?",
      answer:
        "We use industry-standard security measures, including SSL encryption, to protect sensitive information during online transactions. Our payment processors securely store your details for recurring donations.",
    },
    {
      question: "How can I opt out of receiving communications from Sevaarth?",
      answer:
        "You can unsubscribe from our email newsletters by clicking the 'unsubscribe' link at the bottom of our emails or by contacting us directly.",
    },
    {
      question: "Where can I learn more about Sevaarth's work?",
      answer:
        "You can read more about our initiatives on the 'Our Initiatives' page, follow us on social media, or check out our blog for updates on projects and events.",
    },
    {
      question: "Can I view my donation history?",
      answer:
        "Yes, if you need information about your past donations, please contact us at [support@sevaarth.org.in], and we’ll assist you.",
    },
    {
      question: "How does Sevaarth use cookies?",
      answer:
        "We use cookies to improve your experience on our website by remembering your preferences and facilitating authentication. We also use non-personal data to analyze website traffic.",
    },
    {
      question: "How can I contact Sevaarth for more information?",
      answer:
        "You can contact us via email at [support@sevaarth.org.in], or call us at +123-456-7890 for any inquiries.",
    },
  ];

  // Animation variants for FAQ items
  const faqVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-900"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions (FAQ)
      </motion.h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item mb-6 p-5 bg-white shadow-lg rounded-lg border-l-4 border-indigo-500 hover:bg-indigo-50 transition-all duration-300"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            variants={faqVariants}
          >
            <h2
              className="text-2xl font-semibold mb-2 cursor-pointer text-indigo-600 hover:text-indigo-800 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h2>

            {/* Conditionally expand the answer */}
            {expanded === index && (
              <motion.p
                className="text-lg text-gray-700 mt-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link
          href="/contactUs"
          className="text-indigo-600 hover:underline text-lg"
        >
          Have more questions? Contact us here.
        </Link>
      </motion.div>
    </div>
  );
};

export default FAQ;
