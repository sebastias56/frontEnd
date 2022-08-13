import Calendar from './Calendar'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDay} from "@fortawesome/free-solid-svg-icons"
import "./SearchCalender.css"

function SearchCalendar({dateRange, setDateRange}) {
    return (
        <section className="calendar">
            <FontAwesomeIcon icon={faCalendarDay} className="calendar-icon"/>
            <Calendar dateRange={dateRange} setDateRange={setDateRange} name="date" label="date"/>
        </section>
    )
}

export default SearchCalendar;