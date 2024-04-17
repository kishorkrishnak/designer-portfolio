import React from "react";
import HeroSection from "../../components/HeroSection";
import Outro from "../../components/Outro";
import Services from "../../components/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Outro />
      <Footer/>
    </>
  );
};

export default Home;
