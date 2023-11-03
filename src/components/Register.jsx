import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';

import { Link } from 'react-router-dom';




const Register = () => {
const navigate = useNavigate();
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  birthDate: '',
  phone: '',
  email: '',
  contraseña: '',
  foto: null,
});
  const goBack = () => {
    navigate(-1);
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

  const handleRegister = (e) => {
    

    e.preventDefault();
  
    // Prepara los datos del nuevo alumno
    const newAlumnoData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      birthDate: formData.birthDate,
      email: formData.email,
      contraseña: formData.contraseña,
    };

    // Crear un objeto FormData para enviar la imagen
    const formDataToSend = new FormData();
    formDataToSend.append('photo', formData.foto);
    formDataToSend.append('data', JSON.stringify(newAlumnoData));
    

    fetch('http://localhost:4000/user', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Alumno registrado con éxito:', data);
        navigate('/Login');
      })
      .catch((error) => {
        console.error('Error al registrar al alumno:', error);
      });
  };


  /*
    // Realiza la solicitud POST al servidor
    fetch('http://localhost:4000/user', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAlumnoData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Procesa la respuesta del servidor si es necesario
        console.log('Alumno registrado con éxito:', data);
        // Redirecciona al usuario a otra página, por ejemplo, a la página de inicio de sesión.
        navigate('/Login');
      })
      .catch((error) => {
        // Maneja errores, muestra mensajes de error, etc.
        console.error('Error al registrar al alumno:', error);
      });
  };
  */
  
  const smallText = {
    fontSize: '16px',
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
                  
                  <h2>Registro de Alumno</h2>
                  <form onSubmit={handleRegister}>
                  <div className="mb-3">





                    <label htmlFor="photo" className="form-label">
                      Foto de Perfil:
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="photo"
                      accept="image/*"
                      onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
                    />
                  </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Nombre:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Nombre"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Apellido:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Apellidos"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                      Número de Celular::
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="555-855-852"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                     Correo Electronico:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="nombre@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                     Fecha de nacimiento:
                      </label>
                      
                      <input
                        type="date"
                        className="form-control"
                        id="birthDate"
                        placeholder="nombre@gmail.com"
birthDate                        onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      />
                    </div>
                    
                    
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Contraseña:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="***************"
                        value={formData.contraseña}
                        onChange={(e) => setFormData({ ...formData, contraseña: e.target.value })}
                      />
                    </div>

                    
                    <FontAwesomeIcon icon={faQuestionCircle} className="ml-2" />
                      <h1 className="text-center" style={smallText}>
                          ¿ Ya tienes cuenta? <b>
                          <Link to="/Login" className="nav-link">
                          Iniciar Sesión
                      </Link>
                      </b>
                    </h1>
                    <button type="submit" className="btn btn-dark">
                      Registrar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr style={lineaStyle} />
      </div>

      <Footer />
    </div>
  );
};

export default Register;
