import React from "react";
import Footer from './Footer';
import Header from './Header';
import Barra from './Barra';
import BarraClases from './BarraClases';
import Banner from './Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap



function InicioLogin() {
  
  return (
    <div>
      <Header />
      <Barra />
      <Banner/>
      <BarraClases/>
<br></br>
      <Footer />
    </div>
  );
}

export default InicioLogin;
