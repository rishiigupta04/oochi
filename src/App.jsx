import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import PageCard from "./Components/PageCard";
import Prefooter from "./Components/Prefooter";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <PageCard />
      <Prefooter />
    </div>
  );
}

export default App;
