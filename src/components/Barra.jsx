import React from 'react';
import { Link } from 'react-router-dom';

function Barra() {

  

  const navStyle = {
    display: 'flex',
    justifyContent: 'center', // Centrar horizontalmente
  };

  const linkStyle = {
    fontWeight: 'bold', // Poner en negritas
    margin: '0 10px', // Agregar margen entre los enlaces
  };

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={navStyle}>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/" className="nav-link" style={linkStyle}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/QuienesSomos" className="nav-link" style={linkStyle}>Quienes Somos</Link>
          </li>
          <li className="nav-item">
            <Link to="/Evento" className="nav-link" style={linkStyle}>Evento</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contacto" className="nav-link" style={linkStyle}>Ubicacion</Link>
          </li>
          <li className="nav-item">
            <Link to="/ListaAlumnos" className="nav-link" style={linkStyle}>ListaAlumnos</Link>
          </li>
          
          {/*
          <li className="nav-item">
            <Link to="/InicioLogin" className="nav-link" style={linkStyle}>Inicio Login</Link>
          </li>
          

          <li className="nav-item">
            <Link to="/" className="nav-link" style={linkStyle}>Cerrar Sesion</Link>
          </li>
          */}

          
        
        </ul>
      </div>
    </nav>
  );
}

export default Barra;
