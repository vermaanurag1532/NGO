// components/ProgrammesSection.js
import Image from "next/image";
import EDUCATION from "/public/images/EDUCATION.png";
import HEALTHCARE from "/public/images/HEALTHCARE.png";
import WOMEN_EMPOWERMENT from "/public/images/WOMEN EMPOWERMENT.png";
import Livelihood from "/public/images/Livelihood.png";
import EMPOWERING_GRASSROOTS from "/public/images/EMPOWERING GRASSROOTS.jpeg";
import DISASTER_RESPONSE from "/public/images/DISASTER RESPONSE.webp";

export default function ProgrammesSection() {
  const programmes = [
    {
      title: "Underprivileged child education",
      description: "Education, nutrition and holistic development of children",
      icon: EDUCATION,
      bgColor: "bg-yellow-200",
      textColor: "text-yellow-600",
    },
    {
      title: "Healthcare",
      description:
        "Taking healthcare services to doorsteps of hard to reach communities",
      icon: HEALTHCARE,
      bgColor: "bg-purple-200",
      textColor: "text-purple-600",
    },
    {
      title: "Women Empowerment",
      description:
        "Empowering adolescent girls & women through community engagement",
      icon: WOMEN_EMPOWERMENT,
      bgColor: "bg-blue-200",
      textColor: "text-blue-600",
    },
    {
      title: "plantation and cleanliness",
      description:
        "Skill training and placement support for underprivileged youth",
      icon: Livelihood,
      bgColor: "bg-orange-200",
      textColor: "text-orange-600",
    },
    {
      title: "cloth collection & donation",
      description:
        "Helping community-based organizations become locally sustainable",
      icon: EMPOWERING_GRASSROOTS,
      bgColor: "bg-green-200",
      textColor: "text-green-600",
    },
    {
      title: "supporting elderly individuals",
      description:
        "Reach out and respond to the needs of the disaster-affected people",
      icon: DISASTER_RESPONSE,
      bgColor: "bg-red-200",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="py-16 bg-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold uppercase tracking-wide text-gray-900">
          Our Programmes
        </h2>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
          {programmes.map((programme, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg  bg-white flex justify-center items-center gap-10`}
            >
              {/* Icon Section */}
              <div className="flex ">
                <Image src={programme.icon} alt={programme.title} width={70} />
              </div>
              {/* Title and Description */}
              <div className="w-[70%]">
                <h3
                  className={`text-2xl font-bold ${programme.textColor} mb-2 `}
                >
                  {programme.title}
                </h3>
                <p className="text-gray-600 ">{programme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
