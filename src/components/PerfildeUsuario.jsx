import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Barra from "./Barra";
import rosa from "../assets/Cosas/rosa.jpg";
import gris from "../assets/Cosas/gris.jpg";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDetail = () => {
  
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

  useEffect(() => {
    // Recuperar el mensaje del almacenamiento local
    const storedMessage = localStorage.getItem("mensaje");

    if (storedMessage) {
      // Mostrar la notificación almacenada
      toast.success(storedMessage, { appearance: "success" });

      // Limpiar el mensaje almacenado después de mostrar la notificación
      localStorage.removeItem("mensaje");
    }
  });

  const userId = localStorage.getItem("id");
  const [user, setUser] = useState(null);

  // Función para formatear la fecha de nacimiento
  const formatBirthDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener la información del usuario
    fetch(`http://localhost:4000/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error:", error));
  }, [userId]);

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
              <ToastContainer />
              <div className="d-flex justify-content-center">
                <div
                  className="card profile-card"
                  style={profileBackgroundStyle}
                >
                  <div className="profile-image">
                    <img
                      src={imageSrc || "https://via.placeholder.com/150"}
                      alt="Profile"
                      className="card-img-top rounded-circle"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {user.firstName} {user.lastName}
                    </h5>
                    <p className="card-text text-center">
                      <strong>Correo:</strong> {user.email}
                    </p>
                    <p className="card-text text-center">
                      <strong>Teléfono:</strong> {user.phone}
                    </p>
                    <p className="card-text text-center">
                      <strong>Fecha de Nacimiento:</strong>{" "}
                      {formatBirthDate(user.birthDate)}
                    </p>

                    <Link
                      to="/EditarUsuario"
                      className="btn btn-primary btn-block"
                    >
                      Editar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading user details...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetail;
