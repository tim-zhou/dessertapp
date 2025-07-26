import React from 'react';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <section id="home" className="section bg-white text-center">Home Section</section>
      <section id="about" className="section bg-light text-center">About Us Section</section>
      <section id="menu" className="section bg-white text-center">Menu Section</section>
      <section id="contact" className="section bg-light text-center">Contact Us Section</section>
    </>
  );
}

export default App;
