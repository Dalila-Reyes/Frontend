import React, { useState } from "react";

const SubirClasificador = () => {
  const [formData, setFormData] = useState({
    clasificador: null,
  });

  const handleFileChange = (e) => {
    setFormData({ clasificador: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    const formDataToSend = new FormData();
    formDataToSend.append("clasificador", formData.clasificador);


    fetch(`http://localhost:4000/user/clasificador`, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if(data.status != 'Error'){
            console.log("Se subio correctamete");
          }
          else{
            localStorage.setItem('mensaje', data.mensaje);
          }
        })

        // Restablece el estado del formulario después de enviar
        setFormData({ clasificador: null });
    }

    
  
    
  
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="clasificador"
          accept=".xml"
          onChange={handleFileChange}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default SubirClasificador;
