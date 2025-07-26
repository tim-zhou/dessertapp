import React from 'react';
import NaviBar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <>
      <NaviBar />
      <div style={{paddingTop: '70px' }}>
        <Home />
        <AboutUs />
      </div>
        
    </>
  );
}

export default App;
