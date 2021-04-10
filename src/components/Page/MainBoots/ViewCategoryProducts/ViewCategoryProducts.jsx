import React, {useState, useEffect, useReducer} from "react"
import {useParams} from "react-router-dom"
import axios from 'axios'
import CardProduct from "./CardProduct"
import routes from "../../../../routes";
import forGetArrProductsReducer
    from "../../../../services/ServiceHooks/allReducers/forGetArrProductsReducer";


function ViewCategoryProducts() {
    const [currentPage, setCurrentPage] = useState(0)
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
            {isLoading && (
                <div className="">
                    <div className="">
                        <span className="">LOADING!</span>
                    </div>
                </div>
            )}

            {!isLoading && (<div className="d-flex justify-content-between">
                <div className='m-3'>First</div>
                <div className="container">
                    {isError && <div>Something went wrong ...</div>}

                    <div className="d-flex justify-content-center">
                        <button disabled={!currentPage} onClick={() => {
                            setCurrentPage(e => e - 1)
                        }} type="button" className="btn btn-secondary m-2">
                        </button>
                        <div className="row row-cols-1 row-cols-md-3 mt-3 pt-5">
                            {products.length > 0 &&
                            products.map(elem => (
                                <div key={elem.productID} className="col mb-4">
                                    <CardProduct elem={elem}/>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => {
                            setCurrentPage(e => e + 1)
                        }} type="button" className="btn btn-secondary m-2">
                        </button>
                    </div>
                </div>
                <div className="">Third</div>
            </div>)}
        </>
    );
}

export default ViewCategoryProducts;
