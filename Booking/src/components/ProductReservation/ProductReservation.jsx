import { useState } from 'react';
import { Link,useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Products from "../../utils/Products/Products.json";
import "./ProductReservation.css"
import ReservationForm from "../ReservationForm/ReservationForm";
import Userform from "../ReservationForm/UserForm/UserForm";
import CalendarReservation from "../SearchCalendar/CalendarReservation";
import SelectHour from '../ReservationForm/SelectHour/SelectHour';
import DetailReservation from './DetailReservation';
import ProductPolicies from "../ProductPolicies/ProductPolicies";

function ProductReservation(props) {
    const location = useLocation();
    const {product} = location.state.product;

    const [checkInHour, setCheckInHour] = useState("");
    
    const [userCity, setUserCity] = useState("");
    console.log(userCity)
    function handleChangeUserCity(value) {
        setUserCity(value);
    }

    function handleCheckInHour(value) {
        setCheckInHour(value);
    }
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


            <section className="reservation-info">
                <form id="reservation-form" name="Reservation Form" className="reservation-form">
                    <Userform handleChangeUserCity={handleChangeUserCity}/>
                    <section className="reservation-calendar-section">
                        <h2 className="reservation-form-title">Selecciona tu fecha de reserva</h2>
                        <div className="calendar-reservation">
                            <CalendarReservation idProducto={product.id}  handleChangeStartDate={props.handleChangeCheckInDate} handleChangeEndDate={props.handleChangeCheckOutDate} />
                        </div>
                    </section>  
                    <SelectHour handleCheckInHour={handleCheckInHour}/>
                </form>
                <DetailReservation userCity={userCity} checkInHour={checkInHour} product={product} checkInDate={props.checkInDate} checkOutDate={props.checkOutDate}/>
            </section>

            <ProductPolicies politicas={product.politicas} />

        </>
    )
}

export default ProductReservation;