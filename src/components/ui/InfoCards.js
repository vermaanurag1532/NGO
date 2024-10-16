// components/InfoCards.js
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import Image from "next/image"; // Using next/image for optimized image handling
import GAREEB from "/public/images/GAREEB.jpg";
import FOOD from "/public/images/FOOD.jpg";

// Reusable Card Component (without Image and Card container)
const Card = ({ title, description, link }) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link); // Navigate to the specified link
    } else {
      console.error("Link is missing or invalid"); // Error handling for missing links
    }
  };

  return (
    <div className="w-[80%] h-[70%] flex flex-col justify-center items-center  text-center z-20 relative bg-[#326c64af]">
      <h3 className="text-4xl font-extrabold text-white mb-3 drop-shadow-md">
        {title}
      </h3>
      <p className="text-gray-200 mb-6 text-lg drop-shadow-sm">{description}</p>
      <button
        onClick={handleClick}
        className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition-all duration-300 ease-in-out shadow-lg"
        aria-label={`Learn more about ${title}`}
      >
        Learn More
      </button>
    </div>
  );
};

// Main InfoCards Component with Carousel and Enhanced UX/UI
export default function InfoCards() {
  // Sample data for the cards
  const cardsData = [
    {
      title: "Become a Volunteer",
      description:
        "Join hands to help us achieve more. Alone, I can do little. Together, we can do anything.",
      link: "/getInvolved#volunteer",
      backgroundImage: GAREEB.src,
    },
    {
      title: "Start Donating",
      description:
        "Your contribution, no matter the size, can make a big difference in the world.",
      link: "/getInvolved#donate",
      backgroundImage: FOOD.src,
    },
  ];

  // Error Handling: Ensure cardsData exists and is not empty
  if (!cardsData || cardsData.length === 0) {
    return (
      <p className="text-center ">No information available at this time.</p>
    );
  }

  return (
    <>
      <h2 className="text-5xl font-extrabold text-center  drop-shadow-lg mt-12">
        Join Us in Making a Difference
      </h2>
      <div className="h-screen  bg-opacity-75 relative overflow-hidden">
        {/* Carousel Section */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          className="z-10 mt-12"
          dynamicHeight={false}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative"
              style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                transition: "background-image 0.8s ease-in-out",
              }}
            >
              {/* Overlay to darken the background for better text readability */}
              <div className="absolute inset-0 z-20 bg-black opacity-60"></div>

              {/* Image component (optional), improves performance */}
              <Image
                src={card.backgroundImage}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="hidden" // Using it in background instead of directly displaying
                quality={100}
              />

              {/* Reusable Card component */}
              <Card
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
