import React from "react"
import "./ProductDetails.css"

function ProductDetails({elem}) {
    console.log("element", elem)
    return (
        <section className="">
            <div className="">
                <img
                    className="productImgDetails"
                    src={`${elem.large_image}`}
                    alt={`${elem.articul}`}
                />
            </div>

            <div className="">
               <p>PRODUCT!!!</p>
            </div>
        </section>
    )
}

export default ProductDetails