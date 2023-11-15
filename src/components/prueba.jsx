import React, { useEffect, useState } from "react";

export const Prueba = () => {
  const [datos, setDatos] = useState({});
  const [id, setId] = useState(1); // Valor inicial de id
  const [url, setUrl] = useState(`https://camino-del-guerrero-api.fly.dev/user/${id}`);

  useEffect(() => {
    // Función para cargar datos basados en el ID
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setDatos(data))
        .catch((error) => console.error("Error al obtener el mensaje:", error));
    };

    // Llamar a fetchData cuando cambie el valor de id
    fetchData();
  }, [url]); // Dependencia de efecto: url

  const handleIdChange = (e) => {
    setId(e.target.value);
    setUrl(`https://camino-del-guerrero-api.fly.dev/user/${e.target.value}`);
  };

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="Ingrese el ID"
          value={id}
          onChange={handleIdChange}
        />
        <button onClick={() => setUrl(`https://camino-del-guerrero-api.fly.dev/user/${id}`)}>
          Consultar
        </button>
      </div>
      <h1>Email: {datos.email}</h1>
      <h1>Nombre: {datos.first_name}</h1>
      <h1>Edad: {datos.age}</h1>
      <h1>Apellido: {datos.last_name}</h1>
    </>
  );
};
