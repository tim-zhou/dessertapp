import React from "react";

const images = [
  "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=636&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://source.unsplash.com/800x400/?dessert,icecream",
  "https://source.unsplash.com/800x400/?drink,coffee",
  "https://source.unsplash.com/800x400/?drink,juice",
  "https://source.unsplash.com/800x400/?dessert,pie",
];

export default function ImageCarousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner rounded shadow">
        {images.map((img, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
            <img src={img} className="d-block w-100" alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
