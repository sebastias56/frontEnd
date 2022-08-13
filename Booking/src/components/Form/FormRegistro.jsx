import React from "react";
import visibility from "../../assets/img/Vector.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Snackbar from "../Snackbar/Snackbar";
import validate from "./FormValidator";

const modificarVisibilidad = () => {
  const botonCrear = document.querySelector("#botonCrear");
  const botonIniciar = document.querySelector("#botonIniciar");
  botonCrear.classList.toggle("oculto");
  botonIniciar.classList.toggle("oculto");
};

function FormRegistro({
  user,
  setUser,
  isLogged,
  setIsLogged,
  snackbarRef,
  setSnackbar,
}) {
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [values, setValues] = React.useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errores, setErrores] = React.useState({});

  const cambiarVisibPassword = () => setVisible(!visible);

  const history = useNavigate();

  //---------Validator----------
  function handleSubmit(evt) {
    evt.preventDefault();

    const formVacio = Object.keys(validate(values)).length;
    const usuario = {
      nombre: values.nombre,
      apellido: values.apellido,
      email: values.email,
      ciudad: "",
      rol: { id: 1, nombre: "user" },
      contrasenia: values.password,
    };
    const tokenUser = {
      username: values.email,
      password: values.password,
    };
    if (
      formVacio === 0 &&
      values.nombre.trim() &&
      values.apellido.trim() &&
      values.email.trim() &&
      values.password.trim() &&
      values.passwordConfirm.trim()
    ) {
      const consultarAPI = async () => {
        try {
          const result = await axios.post(
            "http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/register",
            usuario
          );
          const resultKey = await axios.post(
            "http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/authenticate",
            tokenUser
          );
          if (result.status === 200) {
            setUser(result.data);
            sessionStorage.setItem("user", JSON.stringify(result.data));
            sessionStorage.setItem(
              "token",
              JSON.stringify(resultKey.data.token)
            );
            setIsLogged(true);
            history("/home");
            setSnackbar({
              message: "Usuario registrado correctamente",
              type: "success",
            });
            snackbarRef.current.show();
          }
        } catch (error) {
          if (error.response.status === 500){
          setSnackbar({
            message: "Ya existe un usuario con el mail: " + values.email,
            type: "error",
          });
        }
          snackbarRef.current.show();
          setError(true);

          setErrorMessage(error.message);
        }
      };
      consultarAPI();
    } else {
      console.log(
        "Hubo un error al intertar registrarse. Por favor intente más tarde"
      );
    }
  }
  function handleError(){
    let errores = validate(values);
    setErrores(errores);
  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);

    
  }

  return (
    <>
      <h2 className="tituloForm">Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div className="nombres">
          <div className="nom">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={values.nombre}
              onChange={handleChange}
            />
            {errores.nombre && <p className="errorMessage">{errores.nombre}</p>}
          </div>

          <div className="ape">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              value={values.apellido}
              onChange={handleChange}
            />
            {errores.apellido && (
              <p className="errorMessage">{errores.apellido}</p>
            )}
          </div>
        </div>

        <div className="correo">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errores.email && <p className="errorMessage">{errores.email}</p>}
        </div>
        <div className="contraseña">
          <label htmlFor="password">Contraseña</label>
          <div className="input-wrapper">
            <input
              id="password"
              name="password"
              type={visible ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
            />
            {errores.password && (
              <p className="errorMessage">{errores.password}</p>
            )}
            <img
              src={visibility}
              alt="visibility"
              className="visibilidad"
              onClick={cambiarVisibPassword}
            />
          </div>
        </div>
        <div className="passwordConfirm">
          <label htmlFor="passwordConfirm"> Confirmar contraseña:</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            value={values.passwordConfirm}
            onChange={handleChange}
          />
          {errores.passwordConfirm && (
            <p className="errorMessage">{errores.passwordConfirm}</p>
          )}
        </div>

        <button type="submit" onClick={handleError} className="confirmar">
          Crear cuenta
        </button>
        <p className="pregunta">
          Ya tienes una cuenta?
          <Link to={"/login"} id="botonIniciar" onClick={modificarVisibilidad}>
            {" "}
            Iniciar sesion
          </Link>
        </p>
      </form>
    </>
  );
}

export default FormRegistro;
