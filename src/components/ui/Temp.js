import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import images directly
import background1 from "/public/images/GAREEB.jpg"; // Adjust paths as needed
import background2 from "/public/images/childrens.jpg";

// Array of background images
const images = [background1, background2];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`, // Access the image src property
          transition: "background-image 1s ease-in-out",
        }}
      />

      {/* Blurry Overlay for the Background */}
      <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-lg" />

      {/* Smaller Transparent Blur Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11/12 md:w-2/3 h-3/4 bg-white opacity-20 backdrop-blur-md rounded-lg" />
      </div>

      {/* Centered Text and Button */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Lives
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join Sevaarth in our mission to support the elderly and create lasting
          positive change in our community.
        </motion.p>
        <motion.a
          href="/donate" // Redirect to your donation page
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-transform transform hover:scale-110"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Donate Now
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
