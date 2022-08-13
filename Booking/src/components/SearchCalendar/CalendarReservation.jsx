import "react-datepicker/dist/react-datepicker.css";
import "./CalendarReservation.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useEffect } from "react";
import axios from "axios";

function CalendarReservation(props) {

    const [nextReservation, setNextReservation] = useState();
    const [DisableDates, setDisableDates] = useState([]);
    const [endDisable, setEndDisable] = useState(false);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [size, setSize] = React.useState(window.innerWidth);
    const { handleChangeStartDate, handleChangeEndDate } = props;

    useEffect(() => {
        //peticion de las fechas de reservas
        const consultarAPI = async () => {
            try {
                const parametros = []

                const result = await axios.get('http://apigrp11-env.eba-2kkfuzhu.us-west-2.elasticbeanstalk.com/productos/buscarPorProducto/' + props.idProducto);


                result.data.map(producto => {
                    parametros.push({ start: new Date(producto.fechaInicioReserva), end: new Date(producto.fechaFinReserva) });

                }
                )
                setDisableDates(parametros);
                

            } catch (error) {
                console.log(error);
            }
        }
        consultarAPI();
    }
        , []);



    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        end == null ? setNextReservation({ start }) : setNextReservation(null);
        setEndDate(end);
        if (handleChangeStartDate) {
            handleChangeStartDate(start);
            handleChangeEndDate(end);
        }
    };
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <DatePicker
            selectsRange={true}
            locale="Es"
            dateFormatCalendar="MMMM"
            
            dateFormat="dd 'de' MMM"
            //Show more than one month:
            monthsShown={size <= 745 ? 1 : 2}
            disabledKeyboardNavigation
            //Disable previous dates:
            showDisabledMonthNavigation
            //Disable range dates:
            excludeDateIntervals={DisableDates}


            minDate={new Date()}
            //Calendar locked 
            maxDate={nextReservation}
            //Range selection
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
            withPortal={false}
            //Shows only the calendar and not the imput
            inline={true}
            selected={startDate}
            isClearable={true}
            calendarClassName="reservation-calendar"
            placeholderText="Check In - Check Out"
        ></DatePicker>
    );
}

export default CalendarReservation;