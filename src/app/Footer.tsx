const Footer = () => {
  return (
    <div className="">
      <div className="bg-primary text-white py-20">
        <div className="text-center w-1/2 mx-auto">
          <h1 className="text-3xl">Ready to get started?</h1>
          <p className="text-md mt-4 mb-16">
            Focus on growing your business, while Afternoon takes care of your
            bookkeeping, income and sales taxes.
          </p>
          <a href="" className="bg-white text-primary py-4 px-20 font-bold">
            Get Early Access
          </a>
        </div>
      </div>
      <div className="pt-20 px-8">
        <div className="flex justify-between">
          <img src="logo with name.svg" alt="" className="w-2/5" />
          <div className="socials flex text-font-primary items-end gap-6 mb-4">
            <a href="">
              <img src="envelope-solid.svg" alt="" className="w-4" />
            </a>
            <a href="">
              <img src="linkedin-brands-solid.svg" alt="" className="w-4" />
            </a>
            <a href="">
              <img src="x-twitter-brands-solid.svg" alt="" className="w-4" />
            </a>
          </div>
        </div>
        <div className="border-t-4 border-font-primary mb-2"></div>
        <div className="flex justify-end gap-8 text-font-secondary text-md mb-4">
          <a href="">privacy</a>
          <a href="">terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
