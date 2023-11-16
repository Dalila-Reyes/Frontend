import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Barra from "./Barra";
import Cita from "./Cita";
import BottonRegister from "./BottonRegister";
import BarraClases from './BarraClases';
import ListaAlumnos from './ListaAlumnos';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function Index() {

  const usuario = localStorage.getItem("id");

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

  

  return (
    <div>
      <ToastContainer />
      <Header/>
      
      <Barra/>
      <Cita/>
      
      
      {usuario ?
        <BarraClases />
        :
          <BottonRegister/>
      }
      <Footer/>
    </div>
  );
}

export default Index;
