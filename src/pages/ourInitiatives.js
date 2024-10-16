import React, { useEffect, useState } from "react";
import {
  Heart,
  Users,
  Share2,
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import FallbackImage from "/public/images/20211107_161110.jpg";

const Card = ({ className, children }) => (
  <div className={`rounded-lg border border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="px-6 py-4">{children}</div>
);

const CardFooter = ({ className, children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

// Create a local Button component
const Button = ({ className, children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Custom Badge component
const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${className}`}
  >
    {children}
  </span>
);

const InitiativeCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  category,
  impact,
  location,
  nextEvent,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const [supportCount, setSupportCount] = useState(
    () => Math.floor(Math.random() * 100) + 50,
  );

  const handleError = () => {
    setImgSrc(FallbackImage);
  };

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-xl overflow-hidden bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imgSrc}
          alt={imageAlt}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          width={400}
          height={200}
          onError={handleError}
          priority={true}
        />
        <Badge className="absolute top-4 left-4 bg-emerald-500 text-white">
          {category}
        </Badge>
      </div>
      <CardHeader>
        <h2 className="text-2xl font-bold text-emerald-800">{title}</h2>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1 text-emerald-600 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1 text-emerald-600 flex-shrink-0" />
            <span>{impact}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div id={`description-${title.replace(/\s+/g, "-").toLowerCase()}`}>
          <p
            className={`text-gray-600 ${isExpanded ? "" : "line-clamp-3"} transition-all duration-300`}
          >
            {description}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-emerald-600 hover:text-emerald-700 flex items-center gap-1 transition-colors"
          aria-expanded={isExpanded}
          aria-controls={`description-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {isExpanded ? (
            <>
              Read less <ChevronUp size={16} aria-hidden="true" />
            </>
          ) : (
            <>
              Read more <ChevronDown size={16} aria-hidden="true" />
            </>
          )}
        </button>

        {nextEvent && (
          <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
            <h3 className="font-semibold text-emerald-800 flex items-center">
              <Calendar
                size={16}
                className="mr-2 flex-shrink-0"
                aria-hidden="true"
              />
              Upcoming Event
            </h3>
            <p className="text-sm text-emerald-600 mt-1">{nextEvent}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap gap-2">
          <Button
            className="text-emerald-600 border border-emerald-600 hover:bg-emerald-50"
            onClick={() => setSupportCount((prev) => prev + 1)}
            aria-label={`Support ${title}`}
          >
            <Heart size={16} className="mr-1 inline" aria-hidden="true" />
            Support ({supportCount})
          </Button>
          <Button
            className="text-emerald-600 border border-emerald-600 hover:bg-emerald-50"
            aria-label={`Share ${title}`}
          >
            <Share2 size={16} className="mr-1 inline" aria-hidden="true" />
            Share
          </Button>
        </div>
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
          aria-label={`Get involved with ${title}`}
        >
          Get Involved{" "}
          <ArrowRight size={16} className="ml-1 inline" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const OurInitiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const response = await fetch("/api/initiatives");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Check if the data is an array and set it
        if (Array.isArray(data)) {
          setInitiatives(data);
        } else {
          setError("Unexpected data format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitiatives();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Loading initiatives...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-500">Error: {error}</h2>
      </div>
    );
  }

  return (
    <section className="bg-emerald-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Initiatives
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Join us in making a difference. Every action counts, every life
            matters.
          </p>
        </div>

        {/* Adjust grid based on number of initiatives */}
        <div
          className={`grid gap-8 ${initiatives.length === 1 ? "grid-cols-1" : initiatives.length === 2 ? "grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
        >
          {initiatives.map((initiative, index) => (
            <InitiativeCard key={`initiative-${index}`} {...initiative} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurInitiatives;
