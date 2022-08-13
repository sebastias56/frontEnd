import React, { useState } from "react";
import Overlay from "react-overlay-component";
import ImagesGallery from "../ImagesGallery/ImagesGallery";
import "./Modal.css";

export default function Modal(props) {
    const { product, divider } = props;
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);
    const configs = { animate: true };
    return (
        <>
            <button className="button-gallery"
                onClick={() => {
                    setOverlay(true);
                }}
            >Ver más
            </button>
            <Overlay isOpen={isOpen} closeOverlay={closeOverlay} configs={configs}>
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-body">
                            <ImagesGallery productImages={product.imagenes} divider={divider} showThumbs={false} />
                        </div>
                    </div>
                </div>
            </Overlay>

        </>
    );
}
