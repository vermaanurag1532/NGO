import Image from "next/image";
import Ashok_chakra from "/public/images/ashok chakra.png";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Target,
  ChevronRight,
  Users,
  BookOpen,
  Heart,
  Globe,
  Shield,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function OurLegacy() {
  const [activeTab, setActiveTab] = useState("mission");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = scrollPosition / (docHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const contentSections = {
    mission: {
      title: "Our Mission",
      icon: <Target className="w-12 h-12 md:w-16 md:h-16 text-primary mb-4" />,
      description: "Empowering communities through sustainable change",
      stats: [
        {
          value: "10K+",
          label: "Lives Impacted",
          icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          value: "50+",
          label: "Communities",
          icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          value: "100+",
          label: "Volunteers",
          icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
        },
      ],
      paragraphs: [
        "Sevaarth has a broader mission that goes beyond supporting elderly individuals with household needs. We are committed to empowering women, providing education to underprivileged children, and improving healthcare access for marginalized communities.",
        "By working together with local leaders and dedicated volunteers, Sevaarth strives to bring positive change across various sectors including health, education, and social empowerment.",
      ],
      achievements: [
        "Established 20 educational centers",
        "Launched women empowerment programs",
        "Created healthcare accessibility initiatives",
      ],
      features: [
        {
          icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
          text: "Community Engagement",
          description: "Building stronger, more connected communities",
        },
        {
          icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
          text: "Education Initiatives",
          description: "Providing access to quality education",
        },
        {
          icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
          text: "Healthcare Access",
          description: "Ensuring healthcare reaches everyone",
        },
      ],
    },
    vision: {
      title: "Our Vision",
      icon: (
        <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-primary mb-4" />
      ),
      description: "Creating a future of equality and opportunity",
      stats: [
        {
          value: "2030",
          label: "Goal Year",
          icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          value: "100%",
          label: "Inclusion",
          icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          value: "Global",
          label: "Impact",
          icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
        },
      ],
      paragraphs: [
        "At Sevaarth, our vision is to create a society where every individual, regardless of their background, has access to opportunities that allow them to thrive. We envision a future where women are empowered, children are educated, and communities are healthy and self-sufficient.",
        "Our vision includes fostering a sustainable environment that nurtures growth and equality. By bridging the gap between marginalized groups and essential resources, we aim to create a world where social justice, inclusivity, and equal access are foundational principles.",
      ],
      achievements: [
        "Sustainable development model",
        "Innovative social impact solutions",
        "Cross-cultural collaboration framework",
      ],
      features: [
        {
          icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
          text: "Global Impact",
          description: "Extending our reach across borders",
        },
        {
          icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
          text: "Sustainable Future",
          description: "Building for generations to come",
        },
        {
          icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
          text: "Innovation",
          description: "Pioneering new solutions",
        },
      ],
    },
  };

  return (
    <>
      <section>
        <div className=" pt-5 md:w-9/12 text-center md:text-end ">
          <i className=" md:text-8xl text-7xl  font-Italianno text-gray-400">
            sevaarth
          </i>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center pb-16  px-[13%]">
          <div className="container mx-auto  ">
            <h1 className="text-5xl text-center font-Playfair_Display md:text-start pl-[2%]">
              OUR STORY
            </h1>
            <p className="text-base md:text-xl text-gray-700 mt-4 md:mt-8 leading-relaxed">
              Sevaarth is a dedicated initiative that aims to provide essential
              support to elderly individuals within the community who are facing
              financial hardships. This project focuses on delivering basic
              household groceries and other necessary items to ensure that these
              seniors can maintain a decent standard of living. By addressing
              their immediate needs, Sevaarth seeks to enhance the quality of
              life for elderly individuals who may otherwise struggle to access
              these vital resources.
            </p>
          </div>
          <div className="w-1/2">
            <Image src={Ashok_chakra} alt="Ashok_chakra" />
          </div>
        </div>
      </section>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollProgress }}
      />

      <section className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

        <div className="container mx-auto px-4 py-12 md:py-20 relative">
          {/* Floating Navigation */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-4 z-40 flex justify-center mb-12"
          >
            <div className="inline-flex rounded-full p-1 bg-white shadow-lg backdrop-blur-md bg-opacity-80">
              {Object.keys(contentSections).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveTab(section)}
                  className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-medium text-base md:text-lg transition-all duration-300 ${
                    activeTab === section
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {Object.entries(contentSections).map(
              ([key, section]) =>
                activeTab === key && (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="max-w-6xl mx-auto">
                      {/* Header Section */}
                      <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex justify-center">
                          {section.icon}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                          {section.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                          {section.description}
                        </p>
                      </motion.div>

                      {/* Stats Section */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
                        {section.stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            className="text-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            <div className="flex justify-center mb-2">
                              {stat.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">
                              {stat.value}
                            </div>
                            <div className="text-gray-600">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                      {/* Content Section */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {section.paragraphs.map((paragraph, index) => (
                          <motion.p
                            key={index}
                            className="text-lg text-gray-700 leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>

                      {/* Achievements Section */}
                      <motion.div
                        className="mb-12 md:mb-16 bg-primary/5 rounded-2xl p-6 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                          Key Achievements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {section.achievements.map((achievement, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                              <span className="text-gray-700">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Features Section */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {section.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="p-6 flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                          >
                            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                              <div className="text-primary">{feature.icon}</div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                              {feature.text}
                            </h3>
                            <p className="text-gray-600">
                              {feature.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.div
                        className="mt-12 md:mt-16 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <button className="group inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
                          Learn More
                          <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
