import Reservation from "./Reservation";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Reservations from "../../utils/Reservas/Reservas.json"
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ReservationsList() {

    const [loading, setLoading] = useState(true);
    const { userid} = useParams();
    const token = JSON.parse(sessionStorage.getItem("token"));
    const [reservations, setReservations] = useState([]);
    useEffect (() => {

        const getReservations = async () => {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };
            const response = await axios.get("http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/reservas/"+userid+"/usuario", config);
            setReservations(response.data)
        }
        getReservations();
    }
    , [userid])

    

    if (reservations.length === 0) {
        return (
        <div className="product-list-container">
            <h2 className="product-list-title">Aun no has efectuado ninguna reserva</h2>
        </div>
        )
    }
    else {
        return (
            <>
                <section className="product-label">
                    <h1 className="title-admin">Mis Reservas</h1>
                    <Link to="/home" className="back"><FontAwesomeIcon icon={faChevronLeft} title="Volver al inicio" className="back-icon" /></Link>
                </section>

                <div id="block-products-container">
                    <div className="products">
                        {
                            reservations.slice(0, 4).map(reservation => (
                                
                                <Reservation reservation={reservation} />
                            ))}
                    </div>
                </div>
            </>
        )
    }
}

export default ReservationsList