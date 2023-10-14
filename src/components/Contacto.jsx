import React from "react";
import Footer from './Footer';
import Header from './Header';
import Barra from './Barra';
import Mapa from "../assets/Cosas/Mapa.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

function Contacto() {
  // URL de Google Maps con la ubicación
  const googleMapsURL = "https://www.google.com/maps?q=Hacienda+la+Cofradia+del+Rosario+1616";

  return (
    <div>
      <Header />
      <Barra />
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${Mapa})`,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column', // Esto coloca los elementos en columna
        }}
      >
        <h2 className="text-center" style={{ fontSize: '40px' }}>¿Dónde Nos Ubicamos?</h2><br></br>
        <br></br><br></br><br></br>
        <div className="card bg-white" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="card-body">
            <h1 className="card-title" sty le={{ fontSize: '24px', textAlign: 'center' }}>Guadalajara, Jalisco, México</h1><br></br>
            <p className="card-text" style={{ fontSize: '16px' }}>
              <strong>Domicilio:</strong> <br></br><br></br>
              <FontAwesomeIcon icon={faMapMarker} />
              <a href={googleMapsURL} target="_blank" rel="noopener noreferrer">
                   Hacienda la Cofradia del Rosario #1616
              </a>
            </p>

            <p className="card-text" style={{ fontSize: '16px' }}><br></br>
              <strong>Teléfono:</strong><br></br> +52 33 1839 8176
            </p>
            <p className="card-text" style={{ fontSize: '16px' }}><br></br>
              <strong>Correo:</strong> <br></br>ReyinLight@gmail.com.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
