import { React, useState, useEffect } from "react";
import Ingreso from "./Ingreso";
import Perfil from "./Perfil";
import menu from "./assets/img/menu.svg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Navbar({user, setUser, isLogged, setIsLogged}) {
  
  const [open, setOpen] = useState(false);
  const usuario = JSON.parse(sessionStorage.getItem("user"))


  const history = useNavigate()
  
//---------UserValidator--------

  
function userLogged (){
  const getuser = sessionStorage.getItem("user");

  if(getuser != null){
    let usuario = JSON.parse(getuser);

    return usuario
  }
  
  return null
}

const logout = () => {
  setIsLogged(false);
  setUser(null);
  sessionStorage.clear();
  history("/");
};

  useEffect(() => {
    const usuario = userLogged()
    
    if(usuario){
      setUser(usuario)
      setIsLogged(true);
    }else{
      setUser("null")
    }
   
  }, [])

  

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="sesion navbar">
        {isLogged ? ( <Link to={"/"+usuario.id+"/usuario"} className="btnAdmin">Mis Reservas</Link>) : null}
      {isLogged? userLogged().rol.nombre == "admin" ? (
          <Link to="/crearProducto" className="btnAdmin">
            Administracion
            </Link> 
            ) : null : null}
        {isLogged ? (<Perfil user={user} logout={logout} />) : (<Ingreso />)}
        
        
        
      </div>
      <div className="burger">
        <img onClick={handleClick} src={menu} alt="menu" />
      </div>

      <div className={open ? "nav-menu active" : "nav-menu"}>
        <ul className="menu-items">
          <div className="background-menu">
            <li>
              <Link to={"#"} className="menu-bars">
                <p className="close" onClick={handleClick}>
                  X
                </p>
              </Link>
            </li>
            {isLogged === true ? <Perfil user={user} logout={logout} /> : <h2 className="menu-bar">MENÚ</h2>}
            
            
          </div>
            <div onClick={handleClick} className="menu-flex">
            {isLogged ? ( <Link to={"/"+usuario.id+"/usuario"} className="btnAdmin">Mis Reservas</Link>) : null}
              {!isLogged ? <Ingreso></Ingreso> : <div className="logoutMobileCont">
                
                <button className="logoutMobile" onClick={logout} href="#">¿Desea <span className="logoutSpan">cerrar sesión</span>?</button>
                <hr className="linea line"/>
              
              </div>}
            </div>
          <div className="redes-open">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
