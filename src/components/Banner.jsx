import React, { useState, useEffect } from 'react';
import banner1 from "../assets/Banners/banner1.jpg";
import banner2 from "../assets/Banners/banner2.jpg";
import banner3 from "../assets/Banners/banner3.jpg";
import banner4 from "../assets/Banners/banner4.jpg";
import banner5 from "../assets/Banners/banner5.jpg";
import banner6 from "../assets/Banners/banner6.jpg";
import banner7 from "../assets/Banners/banner7.jpg";


const Banner = () => {
  const images = [banner1, banner2, banner3, banner4, banner5, banner6,banner7];
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const shuffleImages = () => {
      const shuffledImages = [...images];
      for (let i = shuffledImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
      }
      setCurrentImages(shuffledImages.slice(0, 3)); // Muestra tres imágenes aleatorias
    };

    shuffleImages(); // Llama a la función para mostrar las imágenes iniciales

    const interval = setInterval(shuffleImages, 3000); // Cambia las imágenes cada 3 segundos

    return () => {
      clearInterval(interval);
    };
  }, []);

  const imageStyle = {
    width: '70%', // Establece un ancho fijo para todas las imágenes
    height: 'auto', // El alto se ajustará automáticamente para mantener la relación de aspecto
  };

  return (
    <div className="banners-container container">
      <div className="row">
        {currentImages.map((image, index) => (
          <div className="col-md-4" key={index}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              style={imageStyle} // Aplica el estilo a la imagen
              className="img-fluid rounded mx-auto d-block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
