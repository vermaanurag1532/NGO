import { useRouter } from "next/router";
import config from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handler to set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  // Capitalizes the page name for display
  const capitalizePageName = (link) => {
    const formattedName =
      link === "/"
        ? "Home"
        : link
            .replace("/", "")
            .replace(/([A-Z])/g, " $1")
            .trim();
    return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
  };

  // Navigation links
  const navLinks = [
    "/",
    "/ourLegacy",
    "/ourInitiatives",
    "/getInvolved",
    "/contactUs",
  ];

  // Render navigation links
  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link}
        href={link}
        className={`px-4 py-2 rounded-lg transition duration-300 ${
          activeLink === link
            ? "text-green-300"
            : "text-white hover:bg-gray-800 hover:text-gray-200"
        } ${isMobile ? "text-3xl" : ""}`}
        onClick={() => handleLinkClick(link)}
        aria-current={activeLink === link ? "page" : undefined}
      >
        {capitalizePageName(link)}
      </Link>
    ));

  // Handle route changes and scrolling
  const handleRouteChange = useCallback((url) => {
    setActiveLink(url);
    setIsScrolled(url !== "/");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || router.pathname !== "/");
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleRouteChange, router.pathname, router.events]); // Include router.events in the dependency array

  return (
    <nav
      className={`fixed w-full z-10 top-0 transition-colors duration-300 ${
        isScrolled ? "bg-[#063150]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center md:px-0 lg:px-6 px-6 py-4">
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Image
              src={config.logo}
              alt="Sevaarth Logo"
              width={70}
              height={70}
              className="rounded-full object-cover"
            />
          </Link>
          <span className="text-white font-bold text-xl ml-3">Sevaarth</span>
        </div>

        <div className="hidden md:flex space-x-6 font-bold">
          {renderNavLinks()}
        </div>

        <Link
          href="/donate"
          className="hidden md:block px-4 py-2 rounded-lg text-white transition duration-300 bg-red-500 animate-blink"
          onClick={() => handleLinkClick("/donate")}
        >
          Donate
        </Link>

        <div className="md:hidden relative z-30">
          <button
            className={`relative w-12 h-12 rounded-full flex items-center justify-center focus:outline-none transition-transform duration-300 ease-in-out ${
              isOpen
                ? "bg-gradient-to-br from-blue-400 to-purple-500"
                : "bg-white"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ease-in-out transform ${
                isOpen ? "bg-white rotate-45 translate-y-1" : "bg-current"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                isOpen ? "hidden" : "bg-current mt-1.5"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ease-in-out transform ${
                isOpen
                  ? "bg-white -rotate-45 -translate-y-1"
                  : "bg-current mt-1.5"
              }`}
            ></span>
          </button>
        </div>

        <Link
          href="/donate"
          className="md:hidden px-4 py-2 rounded-lg text-white transition duration-300 bg-red-500 animate-blink"
          onClick={() => handleLinkClick("/donate")}
        >
          Donate
        </Link>

        <div
          className={`fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-lg transform transition-all duration-700 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } z-20`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {renderNavLinks(true)}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
