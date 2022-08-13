import { faSwimmer, faCoffee, faUtensils, faSnowflake, faSmokingBan, faMartiniGlass, faPaw, faCar, faConciergeBell, faDumbbell, faSpa, faTv, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Characteristics.css";

function Characteristics(props) {
    const { productCharacteristics} = props;

    function parseIcons(icon) {
        switch (icon) {
            case 'faWifi':
                return <FontAwesomeIcon icon={faWifi} className="service-icon" />
            case 'faSwim':
                return <FontAwesomeIcon icon={faSwimmer} className="service-icon swimmer-icon" />
            case 'faCoffee':
                return <FontAwesomeIcon icon={faCoffee} className="service-icon" />
            case 'faUtensils':
                return <FontAwesomeIcon icon={faUtensils} className="service-icon" />
            case 'faSnowflake':
                return <FontAwesomeIcon icon={faSnowflake} className="service-icon" />
            case 'faBanSmoking':
                return <FontAwesomeIcon icon={faSmokingBan} className="service-icon" />
            case 'faMartiniGlass':
                return <FontAwesomeIcon icon={faMartiniGlass} className="service-icon" />
            case 'faPaw':
                return <FontAwesomeIcon icon={faPaw} className="service-icon" />
            case 'faCar':
                return <FontAwesomeIcon icon={faCar} className="service-icon" />
            case 'faConciergeBell':
                return <FontAwesomeIcon icon={faConciergeBell} className="service-icon" />
            case 'faDumbbell':
                return <FontAwesomeIcon icon={faDumbbell} className="service-icon" />
            case 'faSpa':
                return <FontAwesomeIcon icon={faSpa} className="service-icon" />
            case 'faTv':
                return <FontAwesomeIcon icon={faTv} className="service-icon" />
            default:
                return;
        }
    }

    return (
        <ul className="services">
            {productCharacteristics.map((characteristic) => (
                <li className="service" key={characteristic.id}>
                    {parseIcons(characteristic.iconoUrl)}
                    <span>{characteristic.nombre}</span>
                </li>
            ))}
        </ul>
    )
};

export default Characteristics;