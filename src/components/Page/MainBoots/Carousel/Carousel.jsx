import React, {useReducer, useState} from "react";
import {useSwipeable} from "react-swipeable";
import carouselReducer from "../../../../services/ServiceHooks/allReducers/CarouselReducer/carouselReducer"
import {getOrder, initialState} from "../../../../services/ServiceHooks/allReducers/CarouselReducer/getMiddleWare";
import {
    CarouselContainer,
    CarouselSlot,
    SlideButton
} from "./styleComponents";
import "./Carousel.css"
import useInterval from "../../../../services/ServiceHooks/customHooks/useInterval";

const Carousel = props => {
    const [state, dispatch] = useReducer(carouselReducer, initialState);

    let testTouch = document.querySelector('._pc')

    const numItems = React.Children.count(props.children);

    const slide = dir => {
        dispatch({type: dir, numItems});
        setTimeout(() => {
            dispatch({type: "stopSliding"});
        }, 50);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => slide("NEXT"),
        onSwipedRight: () => slide("PREV"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    // Interval
    const [slideshowDelay] = useState(5000)

    useInterval(
        () => {
            slide("NEXT")
        }, slideshowDelay
    );

    return (
        <div {...handlers}>
            <div className="wrapperCarousel">
                <CarouselContainer dir={state.dir} sliding={state.sliding}>
                    {React.Children.map(props.children, (child, index) => (
                        <CarouselSlot
                            key={index}
                            order={getOrder({index: index, pos: state.pos, numItems})}
                        >
                            {child}
                        </CarouselSlot>
                    ))}
                </CarouselContainer>
            </div>
            {testTouch && <SlideButton onClick={() => slide("PREV")} float="left">
                Prev
            </SlideButton>}
            {testTouch && <SlideButton onClick={() => slide("NEXT")} float="right">
                Next
            </SlideButton>}
        </div>
    );
};

export default Carousel