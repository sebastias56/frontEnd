import React from 'react'
import accent from "../../assets/img/accent.svg";
import "./ReservaExito.css";
import {Link } from "react-router-dom";

function ReservaCreada(){
    return (
        <div className="containerExito">
          <img src={accent} alt="accent" className="accent" />
          <h3 className="agradecimiento">¡Muchas gracias!</h3>
          <p className="reservaAviso">Tu propiedad se ha creado con éxito.</p>
          <Link to={"/home"} className="botonConfirmacion">
              <p className="ok">
                  Ok
              </p>
              </Link>
        </div>
      );

}

export default ReservaCreada;
