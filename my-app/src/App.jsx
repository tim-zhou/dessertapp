import React from 'react';
import NaviBar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import ContactUs from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <NaviBar />
      <div style={{paddingTop: '70px' }}>
        <section className="section-container">
          <div className="section-content">
            <Home />
          </div>
        </section>

        <section className="section-container">
          <div className="section-content">
            <AboutUs />
          </div>
        </section>

        <section className="section-container">
          <div className="section-content">
            <Menu />
          </div>
        </section>

        <section className="section-container">
          <div className="section-content">
            <ContactUs />
          </div>
        </section>
      </div>
        
    </>
  );
}

export default App;
