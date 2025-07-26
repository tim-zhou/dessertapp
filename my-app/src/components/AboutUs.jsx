import React from 'react';
import { Container, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: '400px',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <Container className="text-center">
        <h2>About Us</h2>
        <p
          style={{
            maxWidth: '600px',
            margin: '20px auto',
            fontSize: '1.2rem',
            lineHeight: '1.6',
            color: '#5a2a44',
          }}
        >
          Welcome to our cozy dessert shop, where we create delightful sweets made from the finest ingredients. 
          Our passion is to bring smiles with every bite. From classic cakes to innovative treats, we have something 
          to satisfy every sweet tooth.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=200&q=80"
          roundedCircle
          alt="Storefront"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      </Container>
    </section>
  );
};

export default AboutUs;
