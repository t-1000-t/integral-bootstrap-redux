import React from "react"
import "./ProductDetails.css"

function ProductDetails({elem}) {
    console.log("element", elem)
    return (
        <article>
            <h4>{elem.name}</h4>
            <span>Код товара: {elem.product_code}</span>
            <section className="">
                <div className="">
                    <p>{elem.self_delivery === 1 ? "Хит продаж" : ""}</p>
                    <img
                        className="productImgDetails"
                        src={`${elem.large_image}`}
                        alt={`${elem.articul}`}
                    />
                </div>
                <div className="productsWrapperDescription">
                    <p>{elem.brief_description}</p>
                    <h4>{elem.retail_price_uah} грн.</h4>
                </div>
                <button type="button" className="productsDetailsBoxButton">Купить</button>
            </section>
        </article>
    )
}

export default ProductDetails