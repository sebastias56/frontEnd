import "./App.css";
import {Link } from "react-router-dom";
import Navbar from "./Navbar";

const modificarCrear = () => {
  const botonCrear = document.querySelector('#botonCrear');
  const botonIniciar = document.querySelector('#botonIniciar');
  botonCrear.classList.toggle("oculto");
  {if(botonIniciar.classList.contains("oculto")){
    botonIniciar.classList.toggle("oculto")
  }};

}

const modificarIniciar = () => {
  const botonIniciar = document.querySelector('#botonIniciar');
  botonIniciar.classList.toggle("oculto");
  const botonCrear = document.querySelector('#botonCrear');
  {if(botonCrear.classList.contains("oculto")){
    botonCrear.classList.toggle("oculto")
  }};

}

function Ingreso() {
  return (
    <div className="ingresoCont">
        <Link to={"/registro"} id="botonCrear" className="botonSesion registro" onClick={modificarCrear}>
          {" "}
          Crear cuenta
        </Link>
        <hr className="linea"/>
        <Link to={"/login"} id="botonIniciar" className="botonSesion inicio" onClick={modificarIniciar}>
          {" "}
          Iniciar sesion
        </Link>

    </div>
  );
}

export default Ingreso;
