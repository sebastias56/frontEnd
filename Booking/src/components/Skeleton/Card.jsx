import "./Skeleton.css"

function Card(props) {

    const { isProductDetail, hideContent, isPrincipalImage } = props;

    return (
        <div className="loader-container">
            <div className={`card ${isProductDetail ? "product-detail-skeleton" : ""} ${isPrincipalImage ? "product-detail-skeleton-principal" : ""} `}>
                <div className={`skeleton image-loader ${isProductDetail ? "product-detail-skeleton-image" : ""}`}></div>
                <div className={`card-content ${hideContent ? "product-detail-skeleton-content" : ""}`}>
                    <div className="text-content">
                        <div className="skeleton text-loader"></div>
                        <div className="skeleton text-loader"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;