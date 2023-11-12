// Importa las dependencias necesarias
import React from 'react';
import LogoFinal from "../assets/Cosas/LogoFinal.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


// Define el componente de encabezado
const Header = () => {
  // Comprueba si el usuario ha iniciado sesión
  const usuario = localStorage.getItem("id");

  // Maneja la función de cierre de sesión
  const handleLogout = () => {
    // Elimina el token del localStorage
    localStorage.removeItem('id');
    
    // Recarga la página para efectuar el cierre de sesión
    //window.location.reload();
    history.push("/");
  };

  // Renderiza el componente del encabezado
  return (
    // Contenedor de la barra de navegación
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logotipo */}
        <a className="navbar-brand" href="#">
          <div className="d-flex flex-column align-items-center">
            <img src={LogoFinal} alt="LogoFinal" width="100" height="70" className="mb-2" />
            <div>
              <strong>El camino del Guerrero</strong> <br />
              <em>Escuela de Kung Fu</em>
            </div>
          </div>
        </a>
        
        {/* Formulario de búsqueda (puedes habilitarlo si es necesario) */}
        <form className="form-inline my-2 my-lg-0 ml-auto">
          {/* Agrega un campo de búsqueda */}
          {/* <input className="form-control mr-sm-2" type="search" placeholder="🔍Buscar" aria-label="Buscar" /> */}
        </form>
        
        {/* Opciones de inicio de sesión o cierre de sesión */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {usuario ? (
              // Opciones cuando el usuario ha iniciado sesión
              <>
                <Link to="/PerfildeUsuario" className="nav-link">
                  <FontAwesomeIcon icon={faUser} /> Mi Perfil
                </Link>
                <Link to="/" className="nav-link" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faUser} /> Cerrar Sesión
                </Link>
              </>
            ) : (
              // Opción cuando el usuario no ha iniciado sesión
              <Link to="/Login" className="nav-link">
                <FontAwesomeIcon icon={faUser} /> Iniciar Sesión
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Exporta el componente
export default Header;
