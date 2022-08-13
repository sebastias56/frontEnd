import Products from "../../utils/Products/Products.json";
import "./ProductPolicies.css";

function ProductPolicies(props) {
    
    const {politicas} = props;
    return (
        <section className="product-policies">
            <h2 className="title-product-detail">¿Qué tienes que saber?</h2>
            <div className="line-separation"></div>
            <div className="policies-container">
                <div className="product-rules-container">
                    <h3 className="product-rules-title">Normas de la casa</h3>
                    {politicas.map(rule => <p className="product-rule-item" key={rule.id}>{rule.casa}</p>
                    )}
                </div>
                <div className="product-rules-container">
                    <h3 className="product-rules-title">Salud y seguridad</h3>
                    {politicas.map(rule => <p className="product-rule-item" key={rule.id}>{rule.salud}</p>
                    )}
                </div>
                <div className="product-rules-container">
                    <h3 className="product-rules-title">Política de cancelación</h3>
                    {politicas.map(rule => <p className="product-rule-item" key={rule.id}>{rule.cancelacion}</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProductPolicies;