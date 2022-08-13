import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Stars(props) {
    const { puntuation } = props;
    return (
        <div>
            <FontAwesomeIcon icon={faStar} className={`${puntuation > 0? "rating-star-product" : "rating-star-reservation"}`} />
            <FontAwesomeIcon icon={faStar} className={`${puntuation > 2 ? "rating-star-product" : "rating-star-reservation"}`} />
            <FontAwesomeIcon icon={faStar} className={`${puntuation > 4 ? "rating-star-product" : "rating-star-reservation"}`} />
            <FontAwesomeIcon icon={faStar} className={`${puntuation > 6 ? "rating-star-product" : "rating-star-reservation"}`} />
            <FontAwesomeIcon icon={faStar} className={`${puntuation > 8 ? "rating-star-product" : "rating-star-reservation"}`} />
        </div>
    )
}

export default Stars;