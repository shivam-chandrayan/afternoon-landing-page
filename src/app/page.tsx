import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="hero-bg-graphic px-20">
        <img src="/hero-bg-graphic.png" alt="" className="w-full" />
      </div>
    </div>
  );
}
