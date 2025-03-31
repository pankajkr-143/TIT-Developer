import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Changed 'react-router' to 'react-router-dom'

import Navbar from '../Components/Navbar/Navbar';
import HomeSlider from '../Components/Navbar/pages/HomeSlider';
import Events from '../Components/Events/Events';
import HallOfFame from '../Components/HallOfFame/HallOfFame';
import MeetMentors from '../Components/MeetMentors/MeetMentors';
import About from '../Components/Navbar/pages/About';
import Gallery from '../Components/Gallery/Gallery';
import Footer from '../Components/Footer/Footer';
import Jionus from '../Components/Jionus/Jionus';
import Testimonial from '../Components/Testimonial/Testimonial';
import Contact from '../Components/Contact/Contact';
import WallOfImpact from '../Components/WallofImpact/WallofImpact';
// import About1 from '../Components/Navbar/pages/About1'

function MainLayout() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navbar stays fixed on top */}
      <Routes>
        {/* Define each route for individual pages */}
        <Route path="/" element={<HomeSlider />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/halloffame" element={<HallOfFame />} />
        <Route path="/meetmentors" element={<MeetMentors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/jionus" element={<Jionus />} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/wallofimpact" element={<WallOfImpact/>} />
        {/* <Route path="/about1" element={<About1/>} /> */}
        

        
      </Routes>
      <Footer />  {/* Footer stays fixed at the bottom */}
    </BrowserRouter>
  );
}

export default MainLayout;
