import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Barra from "./Barra";

import "bootstrap/dist/css/bootstrap.min.css";

import rosa from "../assets/Cosas/rosa.jpg";
import gris from "../assets/Cosas/gris.jpg";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const EditarAlumno = () => {
  
  const notify = (mensaje) => {
    toast(mensaje, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const mensajeError = (mensaje) =>{
    toast.error(mensaje, { appearance: "Success" });

  }

  const userId = localStorage.getItem("editarId");
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
    email: "",
    contraseña: "",
    
    grado: "",
    estado: "",
    rol: "",
  });

  // Función para formatear la fecha de nacimiento
  const formatBirthDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDate = (dateString) => {
    if (!dateString) {
      return ""; // Devuelve una cadena vacía si no hay fecha
    }

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener la información del usuario
    //fetch(`http://localh ost:4000/user/${userId}`)
    fetch(`http://localhost:4000/user/${userId}`)

      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setFormData({
          ...formData, // Preserva los valores antiguos
          firstName: data.firstName,
          lastName: data.lastName,
          birthDate: data.birthDate,
          phone: data.phone,
          email: data.email,
          contraseña: data.contraseña,
          grado: data.grado,
          estado: data.estado,
          rol: data.rol,
        });
      })
      .catch((error) => console.error("Error:", error));
  }, [userId]);

  const listaAlumnosStyle = {
    backgroundImage: `url(${rosa})`, // Establece la imagen de fondo
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const profileBackgroundStyle = {
    backgroundImage: `url(${gris})`, // Establece la imagen de fondo del perfil
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  // Codigo para envio de la imagen
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleRegister = (e) => {
    e.preventDefault();


    // Prepara los datos del nuevo alumno
    const newAlumnoData = {
      id: userId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      birthDate: formData.birthDate,
      email: formData.email,
      contraseña: formData.contraseña,
      
      grado: formData.grado,
      estado: formData.estado,
      rol: formData.rol,

    };

    // Crear un objeto FormData para enviar la imagen y los datos

    
      // No hay foto

      const formDataToSend = new FormData();
      formDataToSend.append("data", JSON.stringify(newAlumnoData));

      fetch("http://localhost:4000/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Establece el tipo de contenido a JSON
        },
        body: JSON.stringify(newAlumnoData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Alumno registrado con éxito:", data);
          localStorage.setItem('mensaje', data.mensaje);
          window.location.href = "https://dalila-reyes.github.io/Frontend/";
        })
        .catch((error) => {
          console.error("Error al registrar al alumno:", error);
        });
  };

  // Solicita la foto de perfil
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET para obtener la imagen
    fetch(`http://localhost:4000/user/getPhoto/${userId}`)
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      })
      .catch((error) => {
        console.error("Error al obtener la imagen:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Barra />
      <div style={listaAlumnosStyle}>
        <div className="row justify-content-center">
          {user ? (
            <div className="col-md-6">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="d-flex justify-content-center">
                <div
                  className="card profile-card"
                  style={profileBackgroundStyle}
                >
                  <div className="profile-image">
                    <img
                      src={imageSrc || "https://via.placeholder.com/150"}
                      alt="Profile"
                      className="justify-content-between rounded-circle"
                    />
                    <br />
                    
                  </div>
                  
                  <ToastContainer />
                  <form onSubmit={handleRegister}>
                    <div className="card-body">
                      <h5 className="card-title text-center">
                      Nombre: {formData.firstName} {formData.lastName}
                      <br />
                      Correo: {formData.email}
                      <br />
                      Telefono: {formData.phone}
                      <br />
                      Fecha de nacimiento: {formatDate(formData.birthDate)}
                      <br />
                      </h5>

                      <h5 className="card-title text-center">
                        <strong>Grado:</strong>{" "}
                        <input
                          type="text"
                          value={formData.grado}
                          onChange={(e) =>
                            setFormData({ ...formData, grado: e.target.value })
                          }
                        />
                      </h5>
                      <h5 className="card-title text-center">
                        <strong>Estado:</strong>{" "}
                        <input
                          type="text"
                          value={formData.estado}
                          onChange={(e) =>
                            setFormData({ ...formData, estado: e.target.value })
                          }
                        />
                      </h5>

                      <h5 className="card-title text-center">
                      <strong>Administrador:</strong>{" "}
                      <input
                              type="checkbox"
                              checked={formData.rol}
                              onChange={(e) =>
                                setFormData({ ...formData, rol: e.target.checked })
                              }
                            />
                        </h5>

                      
                      

                      <button type="submit" className="btn btn-dark">
                        Guardar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading user details...</p>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      .
      <Footer />
    </div>
  );
};

export default EditarAlumno;
