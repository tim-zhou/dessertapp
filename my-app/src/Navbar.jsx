import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom shadow-sm">
      <div className="container">
        <a className="navbar-brand text-pink" onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          🍰 Sweet Bites
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => scrollTo('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => scrollTo('about')}>About Us</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => scrollTo('menu')}>Menu</button>
            </li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={() => scrollTo('contact')}>Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
