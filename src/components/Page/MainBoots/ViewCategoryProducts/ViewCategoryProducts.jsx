import React, {useState, useEffect, useReducer} from "react"
import {useParams} from "react-router-dom"
import axios from 'axios'
import routes from "../../../../routes";
import MainCard from "../MainCard";
import forGetArrProductsReducer
    from "../../../../services/ServiceHooks/allReducers/forGetArrProductsReducer";
import "./ViewCategoryProducts.css"


function ViewCategoryProducts() {
    const [currentPage] = useState(0)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [products, dispatchP] = useReducer(forGetArrProductsReducer, [])

    // useParams
    const params = useParams()
    const categoryNumber = params.categoryNum

    // useEffect by closeDropdown
    // useEffect(() => {
    //     closeDropdown()
    // }, [])

    console.log(categoryNumber)
    console.log(currentPage)

    // --- useEffect for will get all products --- //
    useEffect(() => {
        const source = axios.CancelToken.source()
        const fetchData = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const result = await axios(`${routes.URL}/api/products/${categoryNumber}/${currentPage}`, {
                    cancelToken: source.token
                })
                console.log("AxiosCancel: got response products")
                const {newArr} = result.data
                dispatchP({type: 'GET_ARR_PRODUCTS', payload: {newArr}})
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
    }, [currentPage, categoryNumber])

    return (
        <>
            {isError && <div>Something went wrong ...</div>}
            {isLoading && (
                <div className="">
                    <div className="">
                        <span className="">LOADING!</span>
                    </div>
                </div>
            )}

            {!isLoading && (<div className="containerCatProd">
                {products.length > 0 &&
                products.map(elem => (
                    <MainCard key={elem.productID} elem={elem}/>
                ))}
            </div>)}
        </>
    );
}

export default ViewCategoryProducts;
