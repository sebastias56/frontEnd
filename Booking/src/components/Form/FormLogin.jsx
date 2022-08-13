import React from "react";
import visibility from "../../assets/img/Vector.svg";
import "./FormLogin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validate from "./FormValidatorLogin";

const modificarHeader = () => {
  const botonCrear = document.querySelector("#botonCrear");
  const botonIniciar = document.querySelector("#botonIniciar");
  botonCrear.classList.toggle("oculto");
  botonIniciar.classList.toggle("oculto");
};

function FormLogin({
  user,
  setUser,
  isLogged,
  setIsLogged,
  snackbarRef,
  setSnackbar,
}) {
  const [visible, setVisible] = React.useState(false);
  const [data, setData] = React.useState();
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const history = useNavigate();
  const cambiarVisibilidad = () => setVisible(!visible);
  const [errores, setErrores] = React.useState({});

  //inicio sesion con local storage validando que el usuario exista
  function cargarUsuario() {
    const consultarAPI = async () => {
      try {
        const usuario = {
          username: values.email,
          password: values.password,
        };
        const result = await axios.get(
          "http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/login/" + values.email + "/" + values.password
        );
        const resultKey = await axios.post(
          "http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/authenticate",
          usuario
        );
        setUser(result.data);
        sessionStorage.setItem("user", JSON.stringify(result.data));
        sessionStorage.setItem("token", JSON.stringify(resultKey.data.token));
        setIsLogged(true);
        history("/home");
        if (result.status === 200) {
          setSnackbar({
            message: "Usuario logueado correctamente",
            type: "success",
          });
          snackbarRef.current.show();
        }
      } catch (error) {
        setSnackbar({
          message: "Usuario o contraseña incorrectos",
          type: "error",
        });
        snackbarRef.current.show();
        setError(true);
        setErrorMessage(error.message);
      }
    };
    consultarAPI();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const formVacio = Object.keys(validate(values)).length;
    if (formVacio === 0) {
      cargarUsuario();
    } else {
      setErrores(validate(values));
    }
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
      <h2 className="tituloForm">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
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
            <img
              src={visibility}
              alt="visibility"
              className="visibilidad"
              onClick={cambiarVisibilidad}
            />
          </div>
          {errores.password && (
            <p className="errorMessage">{errores.password}</p>
          )}
        </div>

        <button type="submit" className="confirmar">
          Ingresar
        </button>
        <p className="pregunta">
          Aun no tienes cuenta?
          <Link to={"/registro"} id="botonCrear" onClick={modificarHeader}>
            {" "}
            Registrate
          </Link>
        </p>
      </form>
    </>
  );
}

export default FormLogin;
