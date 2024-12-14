
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Project from './components/project';
import Ourwork from './components/ourwork';
import Oursponsers from './components/oursponsers';
import Footer from './components/footer';


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
