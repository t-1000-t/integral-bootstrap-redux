import React, {Component} from 'react';

class CardProduct extends Component {
    render() {
        const {elem} = this.props;
        return (
            <div key={elem.productID} className="card">
                <p className="pl-3 pt-2">Код: {elem.product_code}</p>
                <img src={elem.large_image} className="card-img-top p-2" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{elem.name}</h5>
                    <p className="card-text">{elem.retail_price_uah} грн.</p>
                    <button type="button" className="btn btn-outline-success">Купить ++++</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;