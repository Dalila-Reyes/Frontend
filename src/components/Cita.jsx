import React from 'react';
import LogoFinal from "../assets/Cosas/LogoFinal.jpg";
import Banner from "./Banner";

function Cita() {


  
  const lineaStyle = {
    width: '80%',
    height: '3px',
    background: '#BDB76B',
    margin: '20px auto',
  };

  const lineaStyle2 = {
    width: '40%',
    height: '3px',
    background: '#FFA500',
  };

  const franjaStyle = {
    width: '100%',
    height: '90Px', // Ajusta la altura según tu preferencia
    background: '#BDB76B',
    position: 'relative', // Permite posicionar el texto encima de la franja
    textAlign: 'center', // Centra el texto horizontalmente
    fontWeight: 'bold', // Pone el texto en negritas
    fontSize: '36px', // Ajusta el tamaño de fuente según tu preferencia
    color: 'BLACK', // Cambia el color del texto según tu preferencia
    lineHeight: '80px', // Centra verticalmente el texto en la franja
  };

  const usuario = localStorage.getItem("id");

  return (
    <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
      <hr style={lineaStyle} />
      <blockquote>
        "Domina el arte del cuerpo y la mente en nuestra escuela de kung Fu:"
      </blockquote>
      <blockquote>
        "donde la fuerza se encuentra en la sabiduría."
      </blockquote>
      <div className="d-flex flex-column align-items-center">
        <img src={LogoFinal} alt="LogoFinal" width="100" height="70" className="mb-2" />

        {usuario ?
          <Banner />
          :
          <div style={franjaStyle}>CLASES PRESENCIALES</div>
        }

        <hr style={lineaStyle2} /> {/* Agregar línea después del logo */}
      </div>
      
      
    </div>
  );
}

export default Cita;
