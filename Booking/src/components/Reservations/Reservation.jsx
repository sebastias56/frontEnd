import { useEffect } from "react"
import "./Reservation.css"
import axios from "axios"
import { useState } from "react"
function Reservation(props) {
    const { reservation } = props
    const [product, setProduct] = useState({})
    useEffect (() => {
        const getProduct = async () => {
            const response = await axios.get("http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/productos/");
            setProduct(response.data.filter(product => product.id === reservation.producto.id)[0])
        }
        getProduct();
    }
    , [reservation])
    if (product.id === undefined) {
        return (
            <div className="product-list-container">
                <h2 className="product-list-title">Aun no has efectuado ninguna reserva</h2>
            </div>
        )
    } else {
    return (
        <div className="product-item">
            <img src={product.imagenes[0].url} alt="imagen del alojamiento" />
            <div className="product-text">
                <div>
                    <p className="product-name-reservation">{reservation.producto.titulo}</p>
                </div>
                    <p className="location-map-reservation">
                        Hora de llegada: <span className="map-detail-reservation">{reservation.horaInicioReserva}</span> 
                    </p>
                <p className="location-map-reservation">
                    Fecha de llegada: <span className="map-detail-reservation">{reservation.fechaInicioReserva}</span> 
                </p>
                <p className="location-map-reservation">
                    Fecha de salida: <span className="map-detail-reservation">{reservation.fechaFinReserva}</span> 
                </p>
            </div>
        </div>
    )
    }
}
export default Reservation