import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./ImagesGallery.css";

export default function ImagesGallery(props) {
    const { productImages, divider, showThumbs } = props;
    // mapeo productImages para que me devuelva una imagen por cada elemento para el carousel 

    const createCarouselItemImage = (index = {}) => (


        <div key={index}>
            <img src={`${productImages[index].url}`} alt="Foto del alojamiento" />
        </div>
    );
    const baseChildren = (
        <div>

            {[...Array(productImages.length).keys()].map(createCarouselItemImage)}

        </div>
    );

    return (
        <Carousel
            autoPlay
            interval="3000"
            dynamicHeight
            infiniteLoop
            stopOnHover
            swipeable
            showThumbs={showThumbs}
            statusFormatter={(currentItem, total) => `${currentItem}${divider}${total}`}
        >
            {baseChildren.props.children}

        </Carousel>
    );
}
