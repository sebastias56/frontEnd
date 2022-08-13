import logo from "./assets/img/logotym.png";
import Navbar from "./Navbar";
import {Link } from "react-router-dom";
import { useState, useEffect } from "react"


const modificarVisibilidad = () => {
  const botonCrear = document.querySelector('#botonCrear');
  const botonIniciar = document.querySelector('#botonIniciar');
  botonCrear.classList.remove("oculto");
  botonIniciar.classList.remove("oculto");
}
function Header({user, setUser, isLogged, setIsLogged}) {


  return (
    <>
      
      <Link to={"/home"} className="linkLema" onClick={modificarVisibilidad}>
          {" "}
          <div className="lema">
          <img src={logo} alt="logo" className="logo"></img>
          <h1 className="titulo">Sentite como en tu hogar</h1>
          </div>
        </Link>
      <Navbar user={user} setUser={setUser} isLogged={isLogged} setIsLogged={setIsLogged}></Navbar>
    </>
  );
}

export default Header;
