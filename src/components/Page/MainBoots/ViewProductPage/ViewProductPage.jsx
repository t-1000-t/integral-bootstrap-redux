import React, {useEffect, useReducer, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import routes from "../../../../routes";
import forGetProductReducer from "../../../../services/ServiceHooks/allReducers/forGetProductReducer";
import "./ViewProductPage.css"
import ProductDetails from "../ProductDetails";

function ViewProductPage() {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

        let history = useHistory();

        function handleClick() {
            history.push(routes.HOME);
        }

    // useParams
    const params = useParams()
    const categoryProdID = params.someIdProduct

    const [product, dispatchProduct] = useReducer(forGetProductReducer, [])

    console.log("product", product)
    // --- useEffect for will get all products --- //
    useEffect(() => {
        const source = axios.CancelToken.source()
        const fetchData = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const result = await axios(`${routes.URL}/api/product/${categoryProdID}`, {
                    cancelToken: source.token
                })
                console.log("AxiosCancel: got response products")
                // console.log(result.data)
                const {data} = result
                dispatchProduct({type: 'getProduct', payload: {data}})
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("AxiosCancel: caught cancel products")
                }
                setIsError(true)
            }
            setIsLoading(false)
        }

        fetchData().then(r => r)

        return () => {
            console.log("AxiosCancel: unmounting products");
            source.cancel()
        }
    }, [categoryProdID])


    return (
        <article>
            {isError && <div>Something went wrong ...</div>}
            {isLoading && (
                <div className="wrapperProduct">
                    LOADING!2
                </div>
            )}

            <button type="button" onClick={handleClick}>
                Go back
            </button>

            <ProductDetails elem={product} />
        </article>
    );
}

export default ViewProductPage;