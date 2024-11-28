import Features from "@/app/Features";
import NavBar from "@/app/Navbar";
import Image from "next/image";
import Highlights from "./HighLights";
import Footer from "./Footer";
import FAQ from "./FAQ";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="hero-bg-graphic pt-28 sm:px-20 sm:relative w-full">
        <img
          src="/hero-bg-graphic.png"
          alt=""
          className="w-full hidden md:block"
        />
        <div className="md:absolute md:top-0 md:left-0 md:h-1/2 w-full flex items-end justify-center text-center">
          <div className="px-8 md:w-1/3">
            <h1 className="text-3xl md:text-4xl text-font-primary">
              All-in-one bookkeeping and tax platform for ecommerce brands
            </h1>
            <h2 className="text-md mt-4 text-font-secondary">
              Focus on growing your business, while Afternoon takes care of your
              bookkeeping, income and sales taxes.
            </h2>
            <div className="pt-16">
              <a
                className="bg-primary py-4 px-16 mt-8 text-white text-lg font-semibold hover:bg-font-primary"
                href="https://cal.com/team/afternoon.co/demo"
                target="_blank"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/screenshot-cropped.png" alt="" className="pt-20 ml-8" />

      <Features />

      <Highlights />

      <FAQ />

      <Footer />
    </div>
  );
}
