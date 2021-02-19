import React, {Component} from "react";

function MainCard({elem}) {
    return (
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <p className="card-text mt-2">
                    &nbsp; &nbsp; Код: {elem.product_code}
                </p>
                <img
                    className="card-img-top p-2"
                    src={elem.large_image}
                    alt={elem.product_code}
                />
                <div className="card-body">
                    <p className="card-title text-muted">{elem.name}</p>
                    <p className="card-text">{elem.retail_price_uah} грн.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a href="/#" className="btn btn-primary">
                                Купить
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MainCard;
