import React from "react";
import "./MainCard.css"

function MainCard({elem}) {
    console.log(elem)
    return (
        <div className="containerMainCard">
            <p className="">
                &nbsp; &nbsp; Код: {elem.product_code}
            </p>
            <div className="mainCardBoxImg">
                <img
                    className="imgMainCard"
                    src={elem.large_image}
                    alt={elem.product_code}
                />
            </div>
            <div className="">
                <p className="">{elem.name}</p>
                <p className="">{elem.retail_price_uah} грн.</p>
                <div className="">
                    <div className="">
                        <a href="/#" className="">
                            Купить !!!!!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MainCard;
