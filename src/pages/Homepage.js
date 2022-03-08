import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import { homeObj1, homeObj2, homeObj3 } from "../components/InfoSection/Data";
import Info from "../components/InfoSection/Info";
import Navbar from "../components/NavBar/Navbar";
import Resume from "../components/Resume/Resume";
import SideBar from "../components/SideBar/SideBar";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Info {...homeObj1} />
      <Resume />
      {/* <Info {...homeObj2} /> */}
      <Info {...homeObj3} />
    </>
  );
};

export default Homepage;
