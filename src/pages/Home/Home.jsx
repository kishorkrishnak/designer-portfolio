import React, { useRef } from "react";
import HeroSection from "../../components/HeroSection";
import Outro from "../../components/Outro";
import Services from "../../components/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
const Home = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
   
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Navbar />
        <HeroSection />
        <Services />
        <Outro />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
