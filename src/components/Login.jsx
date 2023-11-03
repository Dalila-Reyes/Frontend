import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import axios from 'axios';



const Login = () => {

  // Definimos dos estados para almacenar el nombre de usuario y la contraseña
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    
      try {
          // Realizamos una solicitud POST al endpoint /api/login en el backend
          const response = await axios.post('http://localhost:4000/user/login', { email, contraseña });
          

          if (response.status === 200 && response.data) {
            // Si la solicitud es exitosa, obtendremos un token de sesión del backend
            const usuario = response.data;
            // A continuación, puedes manejar el token de sesión, por ejemplo, almacenándolo en el almacenamiento local (localStorage)
            localStorage.setItem('id', usuario.id);
            navigate('/');
          }

          // También puedes redirigir al usuario a una página de inicio o realizar otras acciones
      } catch (error) {
          // Si ocurre un error (por ejemplo, autenticación fallida), puedes manejarlo aquí
          console.error('Autenticación fallida', error);
      }

      
  };




  const navigate = useNavigate();

  const goBack = () => {
    navigate('/'); 
  };

  const pageStyle = {
    backgroundColor: 'lightgray',
    minHeight: '100vh',
  };
  const lineaStyle = {
    width: '40%',
    height: '4px',
    background: '#BDB76B',
    margin: '20px auto',
  };
  return (
    <div>
      
      <div style={pageStyle}>
        <div className="container mt-5">
          <button className="btn btn-dark" onClick={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> 
          </button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card custom-card">
                <div className="card-body text-center">
                  
                  <h2 className="mb-3"></h2>


                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Correo Electrónico</label>
                      <input type="text" className="form-control" id="email" placeholder="Nombre@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Contraseña</label>
                      <input type="password" className="form-control" id="contraseña" placeholder="***************" onChange={(e) => setContraseña(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-dark">Acceder</button>
                  </form>


                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <hr style={lineaStyle} /> {}
      </div>
      
      <Footer /> 
    </div>
  );
};

export default Login;