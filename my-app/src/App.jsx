import React from 'react';
import Navbar from './components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <ImageCarousel />
      </section>
      <section id="about" className="section bg-light text-center">About Us Section</section>
      <section id="menu" className="section bg-white text-center">Menu Section</section>
      <section id="contact" className="section bg-light text-center">Contact Us Section</section>
    </>
  );
}

export default App;
