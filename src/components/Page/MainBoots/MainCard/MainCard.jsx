import React from "react";
import "./MainCard.css"
import {NavLink} from "react-router-dom";
import routes from "../../../../routes";

function MainCard({elem}) {
    return (
        <div className="containerMainCard">
            <p>
                &nbsp; &nbsp; Код: {elem.product_code}
            </p>
            <NavLink className="mainCardBoxImg" to={`${routes.PRODUCT}/${elem.productID}`}>
                <img
                    className="imgMainCard"
                    src={elem.large_image}
                    alt={elem.product_code}
                />
            </NavLink>
            <div className="mainCardBoxText">
                <p>{elem.name}</p>
                <p>{elem.retail_price_uah} грн.</p>
                <div>
                    <button type="button" className="mainCardBoxButton">
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );

}

export default MainCard;
