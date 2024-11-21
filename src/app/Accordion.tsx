import { useState } from "react";

const Accordion = ({
  title,
  desc,
  isOpen,
  setOpen,
}: {
  title: string;
  desc: string;
  isOpen: boolean;
  setOpen: Function;
}) => {
  return (
    <div>
      <div
        onClick={() => setOpen(!isOpen)}
        className="cursor-pointer pt-4 pb-2 flex justify-between text-font-primary font-semibold text-md"
      >
        <h2 className="hover:underline">{title}</h2>
        {isOpen ? (
          <img
            className={`w-4 transform origin-center transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
            src="chevron-up-solid.svg"
            alt=""
          />
        ) : (
          <img
            className={`w-4 transform origin-center transition duration-200 ease-out ${
              isOpen && "!rotate-180"
            }`}
            src="chevron-down-solid.svg"
            alt=""
          />
        )}
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "grid-rows-[1fr] opacity-100 pb-4 mt"
                : "grid-rows-[0fr] opacity-0"
            }
        `}
      >
        <div className="overflow-hidden text-md text-font-secondary">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
