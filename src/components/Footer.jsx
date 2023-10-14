import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import '../index.css'; // Importa un archivo de estilos CSS (Footer.css)

function Footer() {
  return (
    <div className="footer bg-sky-950 text-Black py-7 text-center text-xs md:text-xl">
      <p> ® Dalila Limbet Reyes Perez | Derechos Reservados</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/reyinlight/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://www.facebook.com/joseluis.reyesperez.5" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
