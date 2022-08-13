import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import Stars from "../Stars/Stars"
import "./ProductList.css"
import { 
    faSwimmer, 
    faCoffee, 
    faUtensils, 
    faSnowflake, 
    faSmokingBan, 
    faCocktail, 
    faPaw, 
    faCar, 
    faConciergeBell, 
    faDumbbell, 
    faSpa, 
    faTv, 
    faWifi 
} from "@fortawesome/free-solid-svg-icons";

function Product(props) {
    const  {product}  = props;
    const puntuation = Math.floor((Math.random() * (9 - 0 + 1)) + 0);

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
            case 'faCocktail':
                return <FontAwesomeIcon icon={faCocktail} className="service-icon" />
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
    function wordPuntuation(Puntuation) {
        let wordPuntuation = "";
        if (Puntuation === 0) {
            wordPuntuation = "Sin calificar"
        } else if (Puntuation < 3) {
            wordPuntuation = "Malo"
        } else if (Puntuation < 5) {
            wordPuntuation = "Regular"
        } else if (Puntuation < 7) {
            wordPuntuation = "Bueno"
        } else if (Puntuation < 9) {
            wordPuntuation = "Muy Bueno"
        } else {
            wordPuntuation = "Excelente"
        }
        return wordPuntuation;
    }

    return (
        <div className="product-item">
            <img src={product.imagenes[0].url } alt="imagen del alojamiento" />
            <div className="product-text">
                <div className="category-rating">
                    <div className="category-name">
                    <div className="category-stars">
                    <p className="word-rating-detail">{wordPuntuation(puntuation)}</p>
                            <Stars puntuation={puntuation.toFixed()} />
                        
                    </div>
                    <p className="product-name">{product.titulo}</p>
                    </div>
                    
                    <div className="rating">
                        <p className="number-rating">{puntuation.toFixed()}</p>
                        <p className="word-rating">{wordPuntuation(puntuation)}</p>
                        
                    </div>
                </div>
                
                <div className="product-location">
                    <p className="location-map">
                    <FontAwesomeIcon icon={faLocationDot} className="map-icon-home"/>
                    A {product.ciudad.distanciaAlCentro} m del centro
                    </p>
                    <button className="map-detail">
                        MOSTRAR EN EL MAPA
                    </button>
                </div> 

                <ul className="services-icons-list">
                        {product.caracteristicas.map((characteristic) => (
                        <li className="service-icon" key={characteristic.id}>
                                {parseIcons(characteristic.iconoUrl)}
                </li>
            ))}
                </ul>

                <p className="product-description">
                    {product.descripcion.substring (0,80)} 
                    <span className="description-more"> Más...</span>
                </p>
                    <button className="product-detail">Ver más</button>
            </div>
        </div>
    );
}

export default Product;
