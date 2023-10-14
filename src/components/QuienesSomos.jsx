import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import usuario from "../assets/Cosas/usuario.png";
import Maestro from "../assets/Cosas/Maestro.jpg";
import Footer from './Footer';
import Header from './Header';
import Barra from './Barra';

function QuienesSomos() {
  const lineaStyle = {
    width: '100%',
    height: '3px',
    background: '#BDB76B',
    margin: '20px auto',
  };



  const cardStyle = {
    backgroundColor: 'Gainsboro', // Cambiar el color de fondo a gris
    padding: '20px',
    width: '110%', // Añadir un ancho personalizado para la tarjeta
    height: '350px',
    margin: '0 auto', // Centrar la tarjeta en la página
  };

  const textStyle = {
    fontFamily: 'cursiva', // Reemplaza 'cursiva' con la fuente de estilo manuscrito deseada
    fontSize: '16px',
  };

  const imageStyle = {
    width: '80%', // Aumentar el tamaño de la imagen
  };

  return (
    <div>
      <Header />
      <Barra />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-1">
            <img src={usuario} alt="Usuario" style={{ width: '70px' }} />
          </div>
          <div className="col-md-11">
            <hr style={lineaStyle} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card" style={cardStyle}>
              <div className="row">
                <div className="col-md-4">
                  <img src={Maestro} alt="Usuario" style={imageStyle} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    
                    <p className="card-text" style={textStyle}>
                      Quienes Somos<br>
                      </br>
                      En el "Camino del Guerrero" somos más que una escuela de Kung Fu.
                      Somos una comunidad apasionada y comprometida con el arte marcial
                      y el desarrollo personal. Nuestra misión es forjar a jóvenes valientes y comprometidos,
                      dispuestos a explorar y aprender los intrincados caminos de esta disciplina.
                      <br></br><br></br><br></br>
                      Únete a nosotros en este viaje emocionante hacia la maestría del Kung Fu y la construcción
                      de un carácter fuerte. "El camino del Guerrero" está aquí para guiar, inspirar y transformar vidas.
                      <br></br><br></br>
                      Bienvenidos a la travesía, <br></br>José Luis Reyes Perez
                    </p>
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

export default QuienesSomos;
