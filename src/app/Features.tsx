"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const featuresList = [
  {
    title: "Bookkeeping",
    desc: "If you don't have a bookkeeper or accountant, we can help you keep your books clean and up to date.",
    highlights: [
      "Bookkeeping services",
      "Monthly financial statements",
      "Expense tracking",
      "Invoicing and payments",
    ],
  },
  {
    title: "Year end and quarterly taxes keeping",
    desc: "If you don't work with CPA we can help you file your year end and quarterly taxes.",
    highlights: [
      "Year-end tax filing",
      "Quarterly estimated tax calculations",
      "Tax deduction optimization",
      "Audit support",
    ],
  },
  {
    title: "Sales tax automation",
    desc: "Calculate, file, and remit sales tax in all US states automatically.",
    highlights: [
      "Nexus monitoring",
      "Support for all 50 US States",
      "Annual, quarterly or monthly filings",
      "Audit support",
    ],
  },
  {
    title: "Government compliance + mail",
    desc: "Automate goverment communication and filings.",
    highlights: [
      "Compliance calendar with all key dates",
      "LLC Renewals",
      "Annual reports with states",
      "No more missed snail mail",
    ],
  },
];

const Features = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100");

  const handleClick = (index: number) => {
    setActiveFeatureIndex(index);
  };

  // Automatically switch activeFeatureIndex every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState("opacity-0"); // Start fade out
      setTimeout(() => {
        setActiveFeatureIndex(
          (prevIndex) => (prevIndex + 1) % featuresList.length
        );
        setFadeState("opacity-100"); // Fade in the new content
      }, 300); // Match this duration with the CSS transition time
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="features-section mt-24 px-8 sm:px-16 md:px-8 lg:mx-20 xl:mx-40 lg:mt-40">
      <h1 className="text-3xl md:text-4xl text-center text-font-primary">
        We help you save time and avoid penalties
      </h1>
      <div className="md:hidden">
        {featuresList.map((feature, index) => (
          <div key={index} className="pt-8 border-gray-200 border-b-2 pb-8">
            <h3 className="text-2xl">{feature.title}</h3>
            <p className="mb-8 text-font-secondary text-sm">{feature.desc}</p>
            <div className="text-font-primary text-lg">
              {feature.highlights.map((h, i) => (
                <div className="flex mb-2 gap-2" key={i}>
                  <Image className="w-4" src="/circle-check-solid.svg" alt="" />
                  <p className="text-sm">{h}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-2 md:gap-8 lg:gap-20 text-font-primary md:mt-8 lg:mt-20">
          <div>
            {featuresList.map((feature, index) => (
              <div
                className={`p-4 mb-2 cursor-pointer font-medium text-xl ${
                  activeFeatureIndex === index
                    ? "bg-primary text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => handleClick(index)}
                key={index}
              >
                {feature.title}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className={`transition-opacity duration-300 ${fadeState}`}>
              <p className="mb-4 text-font-secondary text-lg">
                {featuresList[activeFeatureIndex].desc}
              </p>
              <div className="text-font-primary text-lg">
                {featuresList[activeFeatureIndex].highlights.map((h, i) => (
                  <div className="flex mb-2 gap-2" key={i}>
                    <Image
                      className="w-4"
                      src="/circle-check-solid.svg"
                      alt=""
                    />
                    <div>{h}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
