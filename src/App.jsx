import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Index from "./components/Index";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambia 'Switch' por 'Routes'
import Header from './components/Header';
import Cita from './components/Cita';
import Barra from './components/Barra';
import BottonRegister from './components/BottonRegister';
import Login from './components/Login';
import Register from './components/Register';
import Contacto from './components/Contacto';
import QuienesSomos from './components/QuienesSomos';
import InicioLogin from './components/InicioLogin';
import Evento from './components/Evento';
import BarraClases from './components/BarraClases';
import Banner from './components/Banner';
import ListaAlumnos from './components/ListaAlumnos';
import PerfildeUsuario from './components/PerfildeUsuario';
import EditarUsuario from './components/EditarUsuario';
import EditarAlumno from './components/EditarAlumno';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/*<Route path="/https://dalila-reyes.github.io/Frontend/" element={<Index />}></Route>*/}
          <Route path="/Frontend" element={<Index />}></Route>
          <Route path="/Header" element={<Header />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path='/Barra' element={<Barra />}></Route>
          <Route path='/BottonRegister' element={<BottonRegister />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Cita' element={<Cita />}></Route>
          <Route path='/Contacto' element={<Contacto />}></Route>
          <Route path='/QuienesSomos' element={<QuienesSomos />}></Route>
          <Route path='/Evento' element={<Evento />}></Route>
          <Route path='/EditarUsuario' element={<EditarUsuario />}></Route>
          {/*<Route path='/InicioLogin' element={<InicioLogin />}></Route>*/}
          <Route path='/BarraClases' element={<BarraClases />}></Route>
          <Route path='/components/Banner' element={<Banner />}></Route>
          <Route path='/ListaAlumnos' element={<ListaAlumnos />}></Route>
          <Route path='/PerfildeUsuario' element={<PerfildeUsuario />}></Route>
          <Route path='/components/Footer' element={<Footer />}></Route>
          <Route path='/EditarAlumno' element={<EditarAlumno />}></Route>
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
