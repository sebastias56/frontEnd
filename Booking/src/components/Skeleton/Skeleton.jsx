import Card from "./Card";
import "./Skeleton.css";

function Skeleton(props) {

    const { isProductDetail } = props;

    if (isProductDetail) return (
        <div className="loader-container-product-detail">
            <div className="loader-principal-image-container-product-detail">
                <Card isProductDetail={true} isPrincipalImage={true} hideContent={true} />
            </div>
            <div className="loader-little-images-container-product-detail">
                <Card hideContent={true} />
                <Card hideContent={true} />
                <Card hideContent={true} />
                <Card hideContent={true} />
            </div>
        </div>
    )
    return (
        <div className="loader-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Skeleton;

