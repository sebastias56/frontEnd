import "./Map.css";

function Map(props) {
    const { product, className } = props;
    return (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe allowfullscreen={""} loading={"lazy"} className={className}
            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCW2rD1iN9Jt7LP0N5R4t2NE5L9QME1bFg&q=" + product.ciudad.provincia + "," + product.ciudad.nombre + "," + product.ciudad.pais + "&zoom=18"}
        ></iframe>
    )
}

export default Map;