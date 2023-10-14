import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css'; 

function formatFechaNacimiento(fechaNacimiento) {
  
  const date = new Date(fechaNacimiento);
  
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return formattedDate;
}

function ListaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/user")
      .then((response) => {
        setAlumnos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de alumnos: ", error);
      });
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="card bg-light">
        <div className="card-body">
          <h1 className="card-title">Lista de Alumnos</h1>
          <table className="table table-custom"> {}
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Fecha de Nacimiento</th>
                <th>Teléfono</th>
                <th>Correo</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListaAlumnos;
