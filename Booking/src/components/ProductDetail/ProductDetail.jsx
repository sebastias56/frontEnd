import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faLocationDot,
    faStar,
    faShareAlt,
    faHeart
} from "@fortawesome/free-solid-svg-icons";
import Products from "../../utils/Products/Products.json";
import Characteristics from "../Characteristics/Characteristics";
import CalendarReservation from "../SearchCalendar/CalendarReservation";
import Images from "./Images";
import Map from "../Map/Map";
import ProductPolicies from "../ProductPolicies/ProductPolicies";
import Skeleton from "../Skeleton/Skeleton";
import Stars from "../Stars/Stars";
import "./ProductDetail.css";
function handleSnackbar(props) {
    props.setSnackbar({
        message: "Para reservar un lugar debes iniciar sesión",
        type: "error"
    });
    props.snackbarRef.current.show()
}

function ProductDetail(props) {
    {/*location.state.product*/ }
    const location = useLocation()
    const { product } = location.state.product;
    const [loading] = useState();

    const puntuation =  Math.floor((Math.random() * (9 - 0 + 1)) + 0);;

    function wordPuntuation(Puntuation) {
        let wordPuntuation = "";
        if (Puntuation === 0) {
            wordPuntuation = "Sin calificaciones"
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

    if (loading) return <Skeleton isProductDetail={true} />;
    return (
        <>
            <section className="product-label">
                <div className="category-and-name">
                    <p className="product-category-detail">{product.categoria.titulo}</p>
                    <h2 className="product-name-detail">{product.titulo}</h2>
                </div>
                <Link to="/home" className="back">
                    <FontAwesomeIcon icon={faChevronLeft} className="back-icon" />
                </Link>
            </section>

            <section className="product-details">
                <div className="location-city">
                    <FontAwesomeIcon icon={faLocationDot} className="map-icon" />
                    <div className="product-address">
                        <p className="product-location-detail">{product.ciudad.nombre}, {product.ciudad.provincia}, {product.ciudad.pais}</p>
                        <p className="product-location-detail">{product.ciudad.distanciaAlCentro}Km al centro</p>
                    </div>
                </div>
                <div className="prueba">
                    <div className="rating-stars">
                        <div className="rating-detail">
                            <p className="word-rating-detail">{wordPuntuation(puntuation)}</p>
                            <Stars puntuation={puntuation.toFixed()} />
                        </div>
                    </div>
                    <p className="number-rating-detail">{puntuation.toFixed()}</p>
                </div>
            </section>

            <section className="share-fav">
                <button className={"share"} aria-label="share">
                    <FontAwesomeIcon icon={faShareAlt} className="share-icon" />
                </button>
                <FontAwesomeIcon icon={faHeart} className="heart-icon isntFavorite" />
            </section>
            <Images product={product} />

            <section className="section-product-description">
                <h2 className="title-product-detail">Alojate en el corazón de {product.ciudad.provincia}</h2>
                <p className="product-description-detail">{product.descripcion}</p>
            </section>

            <section className="section-product-characteristics">
                <h2 className="title-product-detail">¿Qué ofrece el lugar?</h2>
                <div className="line-separation"></div>
                <div className="characteristics">
                    <Characteristics productCharacteristics={product.caracteristicas} />
                </div>
            </section>

            <section className="section-product-reservation">
                <h2 className="title-product-detail">Fechas disponibles</h2>
                <div className="reservation-fields">
                    <div className="calendar-reservation">
                        <CalendarReservation handleChangeStartDate={props.handleChangeCheckInDate} handleChangeEndDate={props.handleChangeCheckOutDate} idProducto={product.id} />
                    </div>
                    <div className="start-reservation">
                        <h3 className="text-reservation">Agregá tus fechas de viaje para obtener precios exactos</h3>
                        {sessionStorage.getItem("token") === null ? <Link to="/login" onClick={() => handleSnackbar(props)} className="button-reservation">Iniciar Reserva</Link> : <Link to={"reservas"} state={{ product: { product } }} className="button-reservation">Iniciar Reserva</Link>}
                    </div>
                </div>
            </section>

            {/* Lodging´s map */}
            <section className="section-product-geolocation">
                <h2 className="title-product-detail">¿Dónde vas estar?</h2>
                <div className="line-separation"></div>
                <p className="geolocation">{product.ciudad.nombre}, {product.ciudad.pais}</p>
                <div className="map">
                    <Map product={product} className="map-product-detail" />
                </div>
            </section>

            <ProductPolicies politicas={product.politicas} />
        </>
    );
}

export default ProductDetail;
