import React, { useState, useEffect } from "react";
import { Carousel, Container } from 'react-bootstrap'
import cheesecake from "../assets/images/cheesecake.jpg";
import chocolate_cake from "../assets/images/chocolate_cake.jpg";
import donuts from "../assets/images/donuts.jpg";
import green_tea from "../assets/images/green_tea.jpg";
import strawberry_smoothie from "../assets/images/strawberry_smoothie.jpg";

const images = [
  cheesecake,
  chocolate_cake,
  donuts,
  green_tea,
  strawberry_smoothie,
];

export default function Home() {
  return (
    <section id="home" className="container-fluid d-flex align items-center justify-content-center"
    style={{minHeight: '100vh', width: '100%'}}>
      <div className="w-100">
        <Container className="text-center">
           <Carousel fade interval={3000}>
            {images.map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block mx-auto"
                  src={src}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </section>
      
  );
}
