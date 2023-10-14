import React from 'react';


function BarraClases() {
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
    height: '150Px', // Ajusta la altura según tu preferencia
    background: '#BDB76B',
    position: 'relative', // Permite posicionar el texto encima de la franja
    textAlign: 'center', // Centra el texto horizontalmente
    fontWeight: 'bold', // Pone el texto en negritas
    fontSize: '26px', // Ajusta el tamaño de fuente según tu preferencia
    color: 'BLACK', // Cambia el color del texto según tu preferencia
    lineHeight: '80px', // Centra verticalmente el texto en la franja
  };

  return (
    
    <div style={{ textAlign: 'center', fontStyle: 'italic' }}>
      <hr style={lineaStyle} />

      <div className="d-flex flex-column align-items-center">

            
            <div style={franjaStyle}>CLASES Y HORARIOS
            <blockquote>
            MARTES Y JUEVES    9:00PM
            </blockquote>
            </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br>
      
    </div>
    
  );
}

export default BarraClases;
