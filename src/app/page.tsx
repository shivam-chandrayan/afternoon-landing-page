import Features from "@/app/Features";
import NavBar from "@/app/Navbar";
import Image from "next/image";
import Highlights from "./HighLights";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="hero-bg-graphic px-20 relative w-full">
        <img src="/hero-bg-graphic.png" alt="" className="w-full" />
        <div className="absolute top-0 left-0 h-1/2 w-full flex items-end justify-center text-center">
          <div className="w-1/3">
            <h1 className="text-4xl text-font-primary">
              All-in-one bookkeeping and tax platform for ecommerce brands
            </h1>
            <h2 className="text-md mt-4 text-font-secondary">
              Focus on growing your business, while Afternoon takes care of your
              bookkeeping, income and sales taxes.
            </h2>
            <div className="pt-16">
              <a
                className="bg-primary py-4 px-16 mt-8 text-white text-lg font-semibold"
                href=""
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </div>

      <Features />

      <Highlights />

      <Footer />
    </div>
  );
}
