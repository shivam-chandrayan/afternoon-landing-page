import Features from "@/app/Features";
import NavBar from "@/app/Navbar";
import Highlights from "./HighLights";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="hero-bg-graphic pt-28 sm:px-20 lg:px-0 lg:pt-8 sm:relative w-full">
        <img
          src="/hero-bg-graphic.png"
          alt=""
          className="w-full hidden lg:block"
        />
        <div className="lg:absolute lg:top-0 lg:left-0 lg:h-1/2 w-full flex items-end justify-center text-center">
          <div className="px-8 lg:w-1/2 xl:w1/3">
            <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-font-primary">
              All-in-one bookkeeping and tax platform for ecommerce brands
            </h1>
            <h2 className="text-md lg:mt-2 mt-4 2xl:text-lg text-font-secondary">
              Focus on growing your business, while Afternoon takes care of your
              bookkeeping, income and sales taxes.
            </h2>
            <div className="lg:mt-6 xl:mt-8 2xl:mt-12 xl:mb-12 mt-16">
              <Link
                className="bg-primary py-4 px-16 mt-8 text-white text-lg 2xl:text-xl font-semibold hover:bg-font-primary"
                href="https://cal.com/team/afternoon.co/demo"
                target="_blank"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/screenshot-cropped.png"
        alt=""
        className="pt-20 pl-8 md:hidden"
      />
      <img
        src="/screenshot.png"
        alt=""
        className="pt-20 px-8 hidden md:block lg:hidden"
      />

      <Features />

      <Highlights />

      <FAQ />

      <Footer />
    </div>
  );
}
