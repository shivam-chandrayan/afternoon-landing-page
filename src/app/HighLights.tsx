const highlightList = [
  {
    title: "Monitor exposure",
    desc: "Connect your billing and HR system to monitor your exposure in real-time.",
  },
  {
    title: "Nexus study",
    desc: "Our tax experts will determine which states you have a tax obligation in, and which states you need to register in.",
  },
  {
    title: "Register",
    desc: "Register in any US state with a single click. Afternoon will registrer you in all states where you have a tax obligation.",
  },
  {
    title: "File and remit sales tax automatically",
    desc: "We will file and remit sales taxes in all states automatically on your behalf.",
  },
];

const Highlights = () => {
  return (
    <div className="highlightSection mt-24 px-8 sm:px-16 md:mx-40 md:mt-40 mb-20">
      <h1 className="text-3xl md:text-4xl text-center text-font-primary">
        Effortless sales tax compliance
      </h1>
      <h2 className="text-md text-center text-font-secondary">
        Afternoon makes it easy to monitor exposure, register, and file sales
        tax in all US states.
      </h2>

      <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 md:mx-40">
        {highlightList.map((h, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <img src={`${h.title}.png`} alt="" className="w-1/3 sm:w-2/3" />
            <h3 className="mt-4 text-xl text-font-primary">{h.title}</h3>
            <p className="text-sm text-font-secondary w-4/5">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
