import React from "react";
import "../App.css";
import Cards from "./Cards/Cards";
import HeroSection from "./Documentations/heroSection";
import Footer from "./Footer";
import ProjectDets from "./ProjectDets";
import Animator from "./Animator/Animator";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Animator />
      <ProjectDets />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
