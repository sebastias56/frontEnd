import { useNavigate,Link } from "react-router-dom"
import {useEffect} from "react"

function Perfil({logout, user}){

    //const usuario = JSON.parse(user)
    return(
    <div className="perfilCont">
        
        <div className="user-conteiner">
            
            <div className="userLogo">
            {(user?.nombre[0] + user?.apellido[0]).toUpperCase()}
            
            </div >
            
            <div className="adjustWelcomeMobile">
            <div className="logoutCont">
                <Link className="logout" onClick={logout} to="/home">X</Link>
        </div>
            <p className="welcome"><span className="hiSpan">Hola,</span><br/>
            </p><p className="userSpan">{user.nombre.split(" ")[0]} {user.apellido}!</p>
            </div>
            
        </div>
    
    
    </div>
    )
}

export default Perfil;