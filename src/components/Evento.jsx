import React from "react";
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
    backgroundColor: 'Gainsboro', // Cambiar el color de fondo a gris
    padding: '0', // Reducir el relleno para que la tarjeta no agregue espacio innecesario
    width: '600PX', // Establecer un ancho personalizado para la tarjeta
    height: '300px',
    margin: '0 auto', // Centrar la tarjeta en la página
  };

  const imageStyle = {
    width: '230%', // Ajustar el tamaño de la imagen
    float: 'left', // Hacer que la imagen esté cargada a la izquierda
    margin: '0', // Eliminar los márgenes para que la imagen esté pegada a la izquierda
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
                <div className="col-md-8">
                  <img src={Evento1} alt="Evento" style={imageStyle} />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    {/* Contenido de texto aquí */}
                  </div>
                </div>
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
