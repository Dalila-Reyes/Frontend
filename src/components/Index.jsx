import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Barra from "./Barra";
import Cita from "./Cita";
import BottonRegister from "./BottonRegister";
import BarraClases from './BarraClases';
import ListaAlumnos from './ListaAlumnos';




function Index() {

  const usuario = localStorage.getItem("id");

  

  return (
    <div>
      
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
