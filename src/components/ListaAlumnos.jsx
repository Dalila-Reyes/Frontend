import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Barra from "./Barra";
import rosa from "../assets/Cosas/rosa.jpg";
import { Link } from "react-router-dom";

function formatFechaNacimiento(fechaNacimiento) {

  

  const date = new Date(fechaNacimiento);
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return formattedDate;
}

const listaAlumnosStyle = {
  backgroundImage: `url(${rosa})`, // Establece la imagen de fondo
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

function ListaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const userRol = localStorage.getItem("rol");

  useEffect(() => {
    axios
      .get("https://camino-del-guerrero-api.fly.dev/user")
      .then((response) => {
        setAlumnos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de alumnos: ", error);
      });
  }, []);

  const editar = (id) => {
    localStorage.removeItem('editarId');
    localStorage.setItem('editarId', id);
  };

  return (
    <div>
      <Header />
      <Barra />
      
      <div style={listaAlumnosStyle}>
      
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="card bg-light">
              <div className="card-body">
                <h1 className="card-title">Lista de Alumnos</h1>
                <form>
                  <table className="table table-custom">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Grado</th>
                        <th>Estado</th>
                        <th>Administrador</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {alumnos.map((alumno) => (
                        <tr key={alumno.id}>
                          <td>{alumno.firstName}</td>
                          <td>{alumno.lastName}</td>
                          <td>{formatFechaNacimiento(alumno.birthDate)}</td>
                          <td>{alumno.phone}</td>
                          <td>{alumno.email}</td>
                          <td>{alumno.grado}</td>
                          <td>{alumno.estado == 1 ? "Activo" : "Inactivo"}</td>

                          <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                            <input
                              type="checkbox"
                              checked={alumno.rol}
                              readOnly
                            />
                          </td>
                          <td>
                          <Link
                            to="/EditarAlumno"
                            className="btn btn-primary btn-block"
                            onClick={() => editar(alumno.id)}
                          >
                            Editar
                          </Link>

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ListaAlumnos;
