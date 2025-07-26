import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap'
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
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <Carousel interval={3000}>
          {images.map((src, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block "
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>   
  );
}
