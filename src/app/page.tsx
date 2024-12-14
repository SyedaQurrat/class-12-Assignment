
import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Ourwork from "./components/Ourwork";

import Oursponsers from "./components/Oursponsers";
import Footer from "./components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Ourwork/>
      <Oursponsers/>
      <Footer/>

    </div>
  )
}

export default Home
