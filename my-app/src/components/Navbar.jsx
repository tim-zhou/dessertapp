import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NaviBar = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="" expand="lg" fixed="top" className="shadow-sm navbar">
      <Container>
        <Navbar.Brand href="#home" onClick={e => handleNavClick(e, 'home')}>
          Sweet Bites
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={e => handleNavClick(e, 'home')}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={e => handleNavClick(e, 'about')}>
              About Us
            </Nav.Link>
            <Nav.Link href="#menu" onClick={e => handleNavClick(e, 'menu')}>
              Menu
            </Nav.Link>
            <Nav.Link href="#contact" onClick={e => handleNavClick(e, 'contact')}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NaviBar;
