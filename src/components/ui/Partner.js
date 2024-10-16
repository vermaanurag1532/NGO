import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Memoized motion container for performance
const MotionContainer = React.memo(({ children }) => (
  <motion.div
    className="flex space-x-16 items-center z-10 relative"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 60, // Slower scroll speed for smoother effect
    }}
  >
    {children}
  </motion.div>
));

// Set display name for the memoized component
MotionContainer.displayName = "MotionContainer";

const Partner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch partners from API using native fetch
  useEffect(() => {
    let isMounted = true;

    const fetchPartners = async () => {
      try {
        const response = await fetch("/api/partners");
        const data = await response.json();
        if (isMounted) {
          setPartners(data.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load partners");
          setLoading(false);
        }
      }
    };

    fetchPartners();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="my-16 px-4 text-center">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Our Sponsors, Partners, and Collaborators
      </h2>

      <div className="relative overflow-hidden bg-gradient-to-r from-white via-gray-100 to-white py-8 rounded-lg shadow-lg">
        {/* Frosted glass effect overlay */}
        <div className="absolute inset-0 bg-white opacity-20 backdrop-blur-md"></div>

        {/* Scrolling container */}
        <MotionContainer>
          {partners.map((partner, index) => (
            <div
              key={`${partner._id}-${index}`} // Append index to make the key unique
              className="flex-shrink-0 w-48 mx-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={partner.logoUrl}
                alt={`${partner.name} Logo`} // Accessibility improvement
                width={150}
                height={150}
                className="mx-auto"
                loading="lazy" // Lazy load non-critical images
              />
            </div>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
};

// Set display name for the main component
Partner.displayName = "Partner";

export default Partner;
