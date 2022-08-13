import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import cities from "../../utils/cities/cities.json";
import './SearchLocation.css';
import {useState} from "react";
import { faOptinMonster } from "@fortawesome/free-brands-svg-icons";

 function SearchLocation ({ciudad, ciudadId}) {
    const [id, setid] = useState();
    //si hay un error, mostrarlo
    const handleChange = (e) => {
        setid(e.target.value);
        ciudadId(e.target.value);
    }
    return (
        <section className="location">

            <FontAwesomeIcon icon={faLocationDot} className="search-location-icon"/>

            <select value={id} onChange={handleChange} id="location-select">
                <option hidden value="">¿A dónde vamos?</option>
                {ciudad.map((city) => (<option  class= {"option-"+city.nombre} value={city.id} key={city.id}>{city.nombre}, {city.pais}</option>))}
            </select>
        </section>
    )
}

export default SearchLocation;  