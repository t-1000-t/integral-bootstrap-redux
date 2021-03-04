import React, {useState, useEffect, useReducer} from "react"
import {useParams} from "react-router-dom"
import axios from 'axios'
import CardProduct from "./CardProduct"
import closeDropdown from "../../../middleware/closeDropdown"
import routes from "../../../../routes";
import navIsShowCatalogReducer from "../../../services/ServiceHooks/allReducers/navIsShowCatalogReducer";
import forGetArrProductsReducer
    from "../../../services/ServiceHooks/allReducers/forGetArrProductsReducer/forGetArrProductsReducer";


function ViewCategoryProducts() {
    const [currentPage, setCurrentPage] = useState(0)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [products, dispatchP] = useReducer(forGetArrProductsReducer, [])
    const [navISC, dispatchCatalog] = useReducer(navIsShowCatalogReducer, false)

    // useParams
    const params = useParams()
    const categoryNumber = params.categorynum

    // useEffect by closeDropdown
    useEffect(() => {
        closeDropdown()
    }, [])

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
                if (newArr) {
                    console.log("OK")
                    dispatchCatalog({type: "NAV_SHOW_CATALOG_CLOSE", payload: {navISC}})
                }
                dispatchP({type: 'GET_ARR_PRODUCTS', payload: {newArr}})
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("AxiosCancel: caught cancel products")
                }
                setIsError(true)
            }
            setIsLoading(false)
        }

        fetchData()

        return () => {
            console.log("AxiosCancel: unmounting products");
            source.cancel()
        }
    }, [currentPage, categoryNumber, navISC])

    return (
        <>
            {isLoading && (
                <div className="text-center">
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}

            <div className="container">
                {isError && <div>Something went wrong ...</div>}
                <div className="row row-cols-1 row-cols-md-3 mt-3">
                    {products.length > 0 &&
                    products.map(elem => (
                        <div key={elem.productID} className="col mb-4">
                            <CardProduct elem={elem}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ViewCategoryProducts;
