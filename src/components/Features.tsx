"use client";

import { useState } from "react";

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

const activeFeatureStyles = `
    bg-primary text-white
`;

const Features = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveFeatureIndex(index);
  };

  return (
    <div className="features-section mx-40 mt-40">
      <h1 className="text-4xl text-center text-font-primary">
        We help you save time and avoid penalties
      </h1>
      <div className="grid grid-cols-2 gap-20 text-font-primary mt-20">
        <div>
          {featuresList.map((feature, index) => (
            <div
              className={`p-4 cursor-pointer ${
                activeFeatureIndex === index ? activeFeatureStyles : null
              }`}
              onClick={() => handleClick(index)}
              key={index}
            >
              {feature.title}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div>
            <p className="mb-4 text-font-secondary">
              {featuresList[activeFeatureIndex].desc}
            </p>
            <div className="text-font-primary">
              {featuresList[activeFeatureIndex].highlights.map((h, i) => (
                <div className="flex mb-2 gap-2">
                  {/* <div> */}
                  <img className="w-4" src="/circle-check-solid.svg" alt="" />
                  {/* </div> */}
                  <div>{h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
