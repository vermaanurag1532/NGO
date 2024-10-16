import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Animation library
import { FaHandsHelping, FaDonate } from "react-icons/fa"; // Icons
import logo from "/public/images/logoSevaarth.png"; // Fallback image
import Child_image from "/public/images/Child image.jpg";
import Another_Child_image from "/public/images/Another child image.jpg";

const Hero = () => {
  // State for handling image load errors
  const [mainImageError, setMainImageError] = useState(false);
  const [smallImageError, setSmallImageError] = useState(false);
  const [campaignImageError, setCampaignImageError] = useState(false);
  const [volunteersImageError, setVolunteersImageError] = useState(false);

  // State for volunteer count and counting animation
  const [volunteerCount, setVolunteerCount] = useState(null);
  const [displayVolunteerCount, setDisplayVolunteerCount] = useState(0);

  // State for donation count and counting animation
  const [donationCount, setDonationCount] = useState(null);
  const [displayDonationCount, setDisplayDonationCount] = useState(0);

  // Fetch volunteer and donation count from API
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const volunteerResponse = await fetch("/api/volunteers");
        const donationResponse = await fetch("/api/totalDonations");

        const volunteerData = await volunteerResponse.json();
        const donationData = await donationResponse.json();

        setVolunteerCount(volunteerData.totalApprovedVolunteers);
        setDonationCount(donationData.totalAmount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCounts();
  }, []);

  // Smooth count up animation for volunteers
  useEffect(() => {
    if (volunteerCount !== null) {
      const interval = setInterval(() => {
        setDisplayVolunteerCount((prev) => {
          if (prev < volunteerCount) return prev + 1;
          clearInterval(interval);
          return volunteerCount;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [volunteerCount]);

  // Smooth count up animation for donations
  useEffect(() => {
    if (donationCount !== null) {
      const interval = setInterval(() => {
        setDisplayDonationCount((prev) => {
          if (prev < donationCount) return prev + 1;
          clearInterval(interval);
          return donationCount;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [donationCount]);

  return (
    <div className="py-16 px-6 lg:px-10 ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Side: Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#0B8494] text-2xl font-semibold mb-4 animate-pulse">
            Give them a chance.
          </p>
          <h1 className="text-[#125B9A] font-bold text-4xl md:text-5xl leading-snug mb-6 tracking-tight">
            Believe in The Better Future of Others.
          </h1>
          <p className="text-[#507687] text-lg leading-relaxed mb-8">
            Your small steps can make a big impact. Join hands to bring smiles
            to those in need.
          </p>
        </motion.div>

        {/* Right Side: Image Collage */}
        <motion.div
          className="lg:w-1/2 flex lg:justify-end relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Large Circular Image */}
          <motion.div
            className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={mainImageError ? logo : Child_image}
              alt="Child image"
              width={750}
              height={750}
              className="object-cover w-full h-full"
              onError={() => setMainImageError(true)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-500 ease-in-out"></div>
          </motion.div>

          {/* Smaller Circular Image */}
          <motion.div
            className="absolute border-8 border-white -top-10 left-[15%] md:left-[30%] w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={smallImageError ? logo : Another_Child_image}
              alt="Another child image"
              width={640}
              height={640}
              className="object-cover w-full h-full"
              onError={() => setSmallImageError(true)}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Lower Section: Campaign and Volunteers */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 -mt-20 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Campaign Card */}
        <motion.div
          className="bg-white p-6 lg:p-8 shadow-lg rounded-lg flex items-start max-w-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="mr-6 w-28 lg:w-32 h-28 lg:h-32 overflow-hidden rounded-md">
            <Image
              src={
                campaignImageError
                  ? logo
                  : "https://enlightio.com/wp-content/uploads/2022/04/reasons-why-charity-is-important.jpg"
              }
              alt="Campaign"
              width={500}
              height={500}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 ease-in-out"
              onError={() => setCampaignImageError(true)}
            />
          </div>
          <div>
            <h3 className="text-[#125B9A] font-bold text-2xl mb-3">
              Join Our Campaign
            </h3>
            <p className="text-[#507687] mb-4">
              Make an impact by contributing to those in need.
            </p>
            <FaHandsHelping className="text-[#125B9A] text-3xl" />
          </div>
        </motion.div>

        {/* Volunteer Stats */}
        <motion.div
          className="bg-white p-6 lg:p-8 shadow-lg rounded-lg flex items-center max-w-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center">
            <div className="bg-[#0B8494] text-white text-3xl lg:text-4xl font-bold rounded-full w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-lg">
              {displayVolunteerCount}+
            </div>
            <p className="text-[#125B9A] mt-3 text-center text-lg lg:text-xl font-semibold">
              Happy Volunteers
            </p>
          </div>
        </motion.div>

        {/* Donation Stats */}
        <motion.div
          className="bg-white p-6 lg:p-8 shadow-lg rounded-lg flex items-center max-w-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center">
            <div className="bg-[#FF7849] text-white text-3xl lg:text-4xl font-bold rounded-full w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-lg">
              ${displayDonationCount}+
            </div>
            <p className="text-[#FF7849] mt-3 text-center text-lg lg:text-xl font-semibold">
              Total Donations
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
