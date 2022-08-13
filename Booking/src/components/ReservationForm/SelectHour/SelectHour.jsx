import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SelectHour(props) {

    const { handleCheckInHour } = props;
    const handleChangeHour = (e) => {
        handleCheckInHour(e.target.value);
    }


    return (
        <section className="check-in-hour-section">
            <h2 className="reservation-form-title">Tu horario de llegada</h2>
            <div className="check-in-hour-select-container">
                <h4 className="check-in-hour-select-text"> <FontAwesomeIcon icon={ faCheckCircle} className="check-icon" /> Tu habitación estará lista para el check-in entre las 10:00 AM y las 11:00 PM</h4>
                <label className="check-in-hour-label">
                    Indica tu horario estimado de llegada
                    <select name="check-in-hour-select" id="check-in-hour-select" onChange={handleChangeHour} required>
                        <option value="" key="default" hidden>Seleccionar hora de llegada</option>
                        <option value={"1:00:00"} key={"1:00"}>1:00 AM</option>
                        <option value={"2:00:00"} key={"2:00"}>2:00 AM</option>
                        <option value={"3:00:00"} key={"3:00"}>3:00 AM</option>
                        <option value={"4:00:00"} key={"4:00"}>4:00 AM</option>
                        <option value={"5:00:00"} key={"5:00"}>5:00 AM</option>
                        <option value={"6:00:00"} key={"6:00"}>6:00 AM</option>
                        <option value={"7:00:00"} key={"7:00"}>7:00 AM</option>
                        <option value={"8:00:00"} key={"8:00"}>8:00 AM</option>
                        <option value={"9:00:00"} key={"9:00"}>9:00 AM</option>
                        <option value={"10:00:00"} key={"10:00"}>10:00 AM</option>
                        <option value={"11:00:00"} key={"11:00"}>11:00 AM</option>
                        <option value={"12:00:00"} key={"12:00"}>12:00 PM</option>
                        <option value={"13:00:00"} key={"13:00"}>01:00 PM</option>
                        <option value={"14:00:00"} key={"14:00"}>02:00 PM</option>
                        <option value={"15:00:00"} key={"15:00"}>03:00 PM</option>
                        <option value={"16:00:00"} key={"16:00"}>04:00 PM</option>
                        <option value={"17:00:00"} key={"17:00"}>05:00 PM</option>
                        <option value={"18:00:00"} key={"18:00"}>06:00 PM</option>
                        <option value={"19:00:00"} key={"19:00"}>07:00 PM</option>
                        <option value={"20:00:00"} key={"20:00"}>08:00 PM</option>
                        <option value={"21:00:00"} key={"21:00"}>09:00 PM</option>
                        <option value={"22:00:00"} key={"22:00"}>10:00 PM</option>
                        <option value={"23:00:00"} key={"23:00"}>11:00 PM</option>
                        <option value={"24:00:00"} key={"24:00"}>12:00 PM</option>
                    </select>
                </label>
            </div>
        </section>
    );
};

export default SelectHour;