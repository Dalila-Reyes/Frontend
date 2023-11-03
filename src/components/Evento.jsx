import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';
import Barra from './Barra';
import Evento1 from "../assets/Eventos/Evento1.jpg";

function Evento() {
  const lineaStyle = {
    width: '100%',
    height: '3px',
    background: '#BDB76B',
    margin: '20px auto',
  };

  const cardStyle = {
    backgroundColor: 'Gainsboro',
    padding: '0',
    width: '600px',
    height: '300px',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
      <Barra />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-11 mx-auto">
            <hr style={lineaStyle} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card mx-auto" style={cardStyle}>
              <div className="row">
                <div className="col-md-12">
                  <img src={selectedImage || Evento1} alt="Evento" style={imageStyle} />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8 mx-auto">
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Evento;
