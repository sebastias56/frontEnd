import facebook from "./assets/img/facebook.svg";
import linkedin from "./assets/img/linkedin.svg";
import twitter from "./assets/img/twitter.svg";
import instagram from "./assets/img/instagram.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Footer(props) {
  return (
    <>
      <p className={ props.open ? "copyright menu-open" : "copyright"}>©2021 Digital Booking</p>
      <div className= { props.open ? "redes-open" : "redes"}>
      <FontAwesomeIcon icon="fa-brands fa-facebook redes-open" />
        <img src={facebook} alt="facebook"></img>
        <img src={linkedin} alt="linkedin"></img>
        <img src={twitter} alt="twitter"></img>
        <img src={instagram} alt="instagram"></img>
      </div>
    </>
  );
}
export default Footer;
