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



const EditarUsuario = () => {
  
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

  const userId = localStorage.getItem("id");
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
    email: "",
    contraseña: "",
    profileImage: "",
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
      profileImage: "imagenes/" + userId + ".jpg",
    };

    // Crear un objeto FormData para enviar la imagen y los datos

    if (formData.foto) {
      // si se selecciono una imagen
      const formDataToSend = new FormData();
      formDataToSend.append("photo", formData.foto);
      formDataToSend.append(
        "data",
        new Blob([JSON.stringify(newAlumnoData)], { type: "application/json" })
      );

      fetch(`http://localhost:4000/user/edit/${userId}`, {
        method: "POST",
        body: formDataToSend,
        headers: {
          // Asegúrate de configurar el encabezado adecuadamente
          // para indicar que estás enviando datos en formato multipart/form-data
          // y que incluyes una parte JSON y una parte de archivo (imagen).
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.status == 'Error'){
            mensajeError(data.mensaje);
          }
          else{
            localStorage.setItem('mensaje', data.mensaje);
            window.location.href = "/PerfildeUsuario";
          }
        })
        .catch((error) => {
          console.error("Error al registrar al alumno:", error);
        });
    } else {
      // No hay foto

      const formDataToSend = new FormData();
      formDataToSend.append("data", JSON.stringify(newAlumnoData));

      fetch("http://localhost:4000/user", {
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
          window.location.href = "/PerfildeUsuario";
        })
        .catch((error) => {
          console.error("Error al registrar al alumno:", error);
        });
    }
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
                    <input
                      type="file"
                      id="foto"
                      accept="image/*"
                      onChange={(e) =>
                        setFormData({ ...formData, foto: e.target.files[0] })
                      }
                    />
                  </div>
                  
                  <ToastContainer />
                  <form onSubmit={handleRegister}>
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        
                        <strong>Nombre :</strong>{" "}
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                        />
                      </h5>
                      <h5 className="card-title text-center">
                        <strong>Apellido:</strong>{" "}
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                        />
                      </h5>

                      <h5 className="card-title text-center">
                        <strong>Correo:</strong>{" "}
                        <input
                          type="text"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </h5>

                      <h5 className="card-title text-center">
                        <strong>Telefono:</strong>{" "}
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </h5>
                      <h5 className="card-title text-center">
                        <strong>Fecha de Nacimiento:</strong>{" "}
                        <input
                          type="date"
                          value={formatDate(formData.birthDate)}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              birthDate: e.target.value,
                            })
                          }
                        />
                      </h5>
                      <h5 className="card-title text-center">
                        <strong>Contraseña:</strong>{" "}
                        <input
                          type="password"
                          value={formData.contraseña}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              contraseña: e.target.value,
                            })
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

export default EditarUsuario;
