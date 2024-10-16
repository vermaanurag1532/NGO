import Image from "next/image";
import logo from "/public/images/logoSevaarth.png"; // Fallback image
import { useState } from "react";
const OurWork = () => {
  const [elderlySupport, setElderlySupport] = useState(false);
  const [childEducation, setChildEducation] = useState(false);
  const [environmentInitiatives, setEnvironmentInitiatives] = useState(false);
  const [womenEmpowerment, setWomenEmpowerment] = useState(false);

  return (
    <section className="container mx-auto py-16 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <Image
            src={
              elderlySupport
                ? logo
                : "https://24ai.tech/en/wp-content/uploads/sites/3/2023/10/01_product_1_sdelat-izobrazhenie-1-1-7-scaled.jpg"
            }
            alt="Elderly Support"
            width={400}
            height={250}
            className="rounded-md"
            onError={() => {
              setElderlySupport(true);
            }}
          />
          <h3 className="text-xl font-bold mt-4">Elderly Support</h3>
          <p className="mt-2 text-gray-600">
            We provide essential groceries and care for seniors in need.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <Image
            src={
              childEducation
                ? logo
                : "https://24ai.tech/en/wp-content/uploads/sites/3/2023/10/01_product_1_sdelat-izobrazhenie-1-1-7-scaled.jpg"
            }
            alt="Child Education"
            width={400}
            height={250}
            className="rounded-md"
            onError={() => {
              setChildEducation(true);
            }}
          />
          <h3 className="text-xl font-bold mt-4">Child Education</h3>
          <p className="mt-2 text-gray-600">
            Sponsoring education to underprivileged children to break the cycle
            of poverty.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <Image
            src={
              womenEmpowerment
                ? logo
                : "https://24ai.tech/en/wp-content/uploads/sites/3/2023/10/01_product_1_sdelat-izobrazhenie-1-1-7-scaled.jpg"
            }
            alt="Women Empowerment"
            width={400}
            height={250}
            className="rounded-md"
            onError={() => {
              setWomenEmpowerment(true);
            }}
          />
          <h3 className="text-xl font-bold mt-4">Women Empowerment</h3>
          <p className="mt-2 text-gray-600">
            Providing job training and resources to support financial
            independence.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <Image
            src={
              environmentInitiatives
                ? logo
                : "https://24ai.tech/en/wp-content/uploads/sites/3/2023/10/01_product_1_sdelat-izobrazhenie-1-1-7-scaled.jpg"
            }
            alt="Environment Initiatives"
            width={400}
            height={250}
            className="rounded-md"
            onError={() => {
              setEnvironmentInitiatives(true);
            }}
          />
          <h3 className="text-xl font-bold mt-4">Environment Initiatives</h3>
          <p className="mt-2 text-gray-600">
            Organizing tree plantations and cleanliness drives for a sustainable
            future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
