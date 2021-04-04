import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination, Controller, Thumbs, Autoplay} from 'swiper';

import 'swiper/swiper-bundle.css';
import "./Carousel.css"
import {middleImg} from "./listSlider"

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const Carousel = () => {

    // Swipers
    const [thumbsSwiper] = useState(null);
    const [controlledSwiper] = useState(null);

    const sliders = []

    middleImg.map((el, i) => {
        sliders.push(
            <SwiperSlide key={`Slider-${i}`} tag="li" data-swiper-autoplay="4000">
                <img src={el.img} alt={`Slide ${i}`} className="imgBoxCarouse"/>
            </SwiperSlide>
        )
    })

    return (
        <>
            <Swiper
                id="sliders-top"
                wrapperTag="ul"
                tag="section"
                spaceBetween={0}
                slidesPerView={1}
                pagination
                autoplay
                thumbs={{swiper: thumbsSwiper}}
                controller={{control: controlledSwiper}}
            >
                {sliders}
            </Swiper>

        </>
    );
};

export default Carousel