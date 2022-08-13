import Products from "../../utils/Products/Products.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./DetailReservation.css"
import axios from "axios";

function DetailReservation(props) {
    const { checkInDate, checkOutDate, product, checkInHour, userCity } = props;
    
    


    function handleSubmit(e) {
        const usuario = JSON.parse(sessionStorage.getItem("user"));
        const token = JSON.parse(sessionStorage.getItem("token"));
        usuario.ciudad = userCity
        if (checkInDate !== "" && checkOutDate !== "" && product !== null && checkInHour !== "" && userCity !== "") {
            e.preventDefault();
            
            
            //actualizar ciudad usuario
            axios.put(`http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/actualizar/usuario`, usuario, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => {
                    postReserva(res)
                }
                )
                .catch(err => {
                    console.log(err)
                }
                )
        }

        //post reserva async await
        const postReserva = async (user) => {
            try {
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                };
                const data = {
                    producto: product,
                    fechaInicioReserva: checkInDate,
                    fechaFinReserva: checkOutDate,
                    usuario: user.data,
                    horaInicioReserva: checkInHour
                }



                const response = await axios.post("http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/reservas", data, config);
                
                if (response.status === 200) {
                    window.location.href = "/confirmacionReserva";
                } else {
                    alert("Error al realizar la reserva")
                }
            }
            catch (error) {
                console.log(error);
            }
        }


    }
    function showCheckInDate() {
        if (checkInDate) {
            return <p>{new Date(checkInDate).getDate()}/{new Date(checkInDate).getMonth() + 1}/{new Date(checkInDate).getFullYear()}</p>
        } else {
            return <p>--/--/--</p>
        }
    }
    function showCheckOutDate() {
        if (checkOutDate) {
            return <p>{new Date(checkOutDate).getDate()}/{new Date(checkOutDate).getMonth() + 1}/{new Date(checkOutDate).getFullYear()}</p>
        } else {
            return <p>--/--/--</p>
        }
    }
    return (
        <article className="product-reservation-item">
            <h2 className="product-reservation-title">Detalle de la reserva</h2>
            <article className="product-reservation-details">
                <img src={product.imagenes[0].url} alt="imagen del alojamiento" />
                <section className="product-reservation-info">
                    <section className="product-info" key={product.id}>
                        <p className="product-category-reservation">{product.categoria.titulo}</p>
                        <p className="product-name-reservation">{product.titulo}</p>
                        <div>
                            <FontAwesomeIcon icon={faStar} className="rating-star-product" />
                            <FontAwesomeIcon icon={faStar} className="rating-star-product" />
                            <FontAwesomeIcon icon={faStar} className="rating-star-product" />
                            <FontAwesomeIcon icon={faStar} className="rating-star-product" />
                            <FontAwesomeIcon icon={faStar} className="rating-star-product" />
                        </div>                        <div className="product-location-reservation">
                            <FontAwesomeIcon icon={faLocationDot} className="map-icon-home" />
                            <p className="location-city-reservation">{product.ciudad.provincia}, {product.ciudad.pais}</p>
                        </div>
                    </section>
                    <section className="reservation-info-detail">
                        <div className="divisor-line" />
                        <div className="checkin-checkout">
                            <p>Check in</p>
                            {showCheckInDate()}
                        </div>
                        <div className="divisor-line" />
                        <div className="checkin-checkout">
                            <p>Check out</p>
                            <p>{showCheckOutDate()}</p>
                        </div>
                        <div className="divisor-line" />
                        <button form="reservation-form" type="submit" onClick={handleSubmit} className="button-reservation-confirm" aria-label="reservation confirm">Confirmar reserva</button>
                    </section>
                </section>
            </article>
        </article>
    )
}

export default DetailReservation;