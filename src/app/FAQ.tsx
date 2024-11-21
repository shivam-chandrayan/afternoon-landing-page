"use client";
import { useState } from "react";
import Accordion from "./Accordion";

const faq = [
  {
    title: "What is Afternoon?",
    desc: "We are a US-based modern accounting firm purpose built for e-commerce brands. Backed by Y Combinator, we are committed to helping you grow your business. We seamlessly integrate with your billing and accounting systems to provide real-time, reliable financial and growth data, empowering you to make informed decisions.",
  },
  {
    title: "What kind of companies do Afternoon serve?",
    desc: "We specialize in serving e-commerce businesses, seamlessly integrating with the software you already use, such as Stripe, Shopify, QuickBooks, and more. Our integrations enable us to to simplify your bookkeeping, and file your income and sales taxes, making your financial processes more efficient and hassle-free.",
  },
  {
    title: "Does Afternoon handle bookkeeping?",
    desc: "We provide comprehensive bookkeeping services using QuickBooks Online, where you can easily add us as your accountant. Our offerings include bookkeeping, account reconciliations, and preparation of financial statements. You'll also have access to our expert team whenever needed. To ensure timely and accurate reporting, all accounting and bookkeeping functions are completed within two weeks of each month's end.",
  },
  {
    title: "Does Afternoon handle my business income taxes?",
    desc: "Since we manage your bookkeeping and sales tax, your business income taxes will be a breeze to handle. We will help prepare, file and remit your business income taxes & returns.",
  },
  {
    title: "Why should I care about sales tax?",
    desc: "Sales tax compliance is a legal requirement for businesses operating in jurisdictions where sales tax applies. Failure to comply can result in penalties and fees, which can be costly for businesses. It's important to manage your sales tax obligations to avoid these potential legal and financial consequences.",
  },
  {
    title: "Which states do I need to register to collect sales tax in?",
    desc: "The states where you need to register to collect sales tax depend on various factors, including the volume of your sales and your physical presence. At Afternoon, we conduct an audit to determine all the states where you have sales tax obligations.",
  },
  {
    title: "Will Afternoon help me with registrations?",
    desc: "Yes, we will help you with all sales tax registrations. We will prepare all the necessary paperwork and register on your behalf.",
  },
];
const FAQ = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  return (
    <div className="grid grid-cols-2 gap-20 mx-40 mt-44 mb-20">
      <div className="relative">
        {/* Spinning SVG */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <img src="logo.svg" alt="" className="spin w-1/2 opacity-50" />
        </div>
        <p className="text-font-secondary text-md mb-8">
          Frequently Asked Questions
        </p>
        <h1 className="text-font-primary text-4xl">
          What would you like to know about <strong>Afternoon</strong>?
        </h1>
      </div>
      <div>
        {faq.map((q, i) => (
          <Accordion
            title={q.title}
            desc={q.desc}
            key={i}
            isOpen={openAccordionIndex === i}
            setOpen={() => setOpenAccordionIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
