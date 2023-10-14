import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function BottonRegister() {
  const smallText = {
    fontSize: '16px',
  };

  const containerStyle = {
    minHeight: '15vh', // Ajusta la altura mínima del contenedor principal
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 className="text-center" style={smallText}>
       ¿ Aun no eres miembro?
        <FontAwesomeIcon icon={faQuestionCircle} className="ml-2" />
      </h1>
      <Link to="/Register">
        <button className="btn btn-dark btn-lg mt-3 text-white">Regístrate</button>
      </Link>

    </div>
  );
}

export default BottonRegister;
