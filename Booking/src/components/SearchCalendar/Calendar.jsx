import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchCalender.css"


export default function Calendar({dateRange, setDateRange}) {
    const [startDate, endDate] = dateRange;
    const [size, setSize] = React.useState(window.innerWidth);

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
        dateFormatCalendar="MMM"
        selectsRange={true}
        dateFormat="dd 'de' MMM"
          //Show more than one month:
          monthsShown={size <= 745 ? 1 : 2}
          //Disable previous dates:
        showDisabledMonthNavigation
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => { 
            setDateRange(update)
            console.log(update.toLocaleString().split(',')[0])  
        }}
        isClearable={true}
          //Disable automatic close:
        shouldCloseOnSelect={true}
        placeholderText="Check In - Check Out"
        >
        </DatePicker >
    );
  }

