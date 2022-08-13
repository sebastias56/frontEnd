import "react-responsive-carousel/lib/styles/carousel.min.css";
import { React } from "react";
import Modal from "../Overlay/Modal";
import ImagesGallery from "../ImagesGallery/ImagesGallery";
import "./Images.css";

function Images(props) {
    const { product } = props;
    return (
        <>
            {/* Image´s gallery */}
            <section className="photo-gallery">
                <div className="product-photos">
                    <div className="photos-container">
                        <figure className="photo">
                            <img src={product.imagenes[0].url} alt="imagen del alojamiento" />
                        </figure>
                        <figure className="photo">
                            <img src={product.imagenes[1].url} alt="imagen del alojamiento" />
                        </figure>
                        <figure className="photo">
                            <img src={product.imagenes[2].url} alt="imagen del alojamiento" />
                        </figure>
                        <figure className="photo">
                            <img src={product.imagenes[3].url} alt="imagen del alojamiento" />
                        </figure>
                        <figure className="photo">
                            <img src={product.imagenes[4].url} alt="imagen del alojamiento" />
                        </figure>
                        {/* Image´s gallery pop-up */}
                        <Modal product={product} divider="/" />
                    </div>

                </div>
            </section>
            <section className="photo-gallery-tablet">
                <ImagesGallery productImages={product.imagenes} divider="/" showThumbs={false} />
            </section>
        </>
    )

}

export default Images;