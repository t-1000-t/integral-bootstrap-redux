import React, {useState, useEffect, useReducer} from "react"
import {useLocation, useParams, useRouteMatch} from "react-router-dom"
import axios from 'axios'
import routes from "../../../../routes";
import MainCard from "../MainCard";
import forGetArrProductsReducer
    from "../../../../services/ServiceHooks/allReducers/forGetArrProductsReducer";
import "./ViewCategoryProducts.css"
import FilterList from "./FilterList";


function ViewCategoryProducts() {
    const [currentPage] = useState(0)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [openFilter, setOpenFilter] = useState(false)

    const [products, dispatchP] = useReducer(forGetArrProductsReducer, [])

    // useParams
    const params = useParams()
    const categoryNumber = params.categoryNum
    const match = useRouteMatch()
    console.log(match)
    // useLocation
    let location = useLocation();

    // useEffect by closeDropdown
    // useEffect(() => {
    //     closeDropdown()
    // }, [])

    // --- useEffect for will get all products FIRST PAGE --- //
    useEffect(() => {
        let source = axios.CancelToken.source()
        const fetchData = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const result = await axios(`${routes.URL}/api/products/${categoryNumber}/${currentPage}`, {
                    cancelToken: source.token
                })
                console.log("AxiosCancel: got response products")
                const {list} = result.data
                dispatchP({type: 'GET_ARR_PRODUCTS', payload: {list}})
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


    // _---------------------------
    // get filter products list FOR VIEW FILTER
    useEffect(() => {
        const listRequest = location.pathname.split("/").slice(3, -1)
        const linkReq = listRequest.reduce((acc, elem) => {
            return acc + `&filters[]=${elem}`
        }, '')
        // console.log("linkReq SECOND", linkReq)
        if (!linkReq) {
            return
        }

        let source = axios.CancelToken.source()
        const fetchData = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const result = await axios(`${routes.URL}/api/products_filter/${categoryNumber}/${linkReq}`, {
                    cancelToken: source.token
                })
                console.log("AxiosCancel: got response products")
                const {list} = result.data
                dispatchP({type: 'GET_ARR_PRODUCTS', payload: {list}})
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

    }, [location, categoryNumber])


    return (
        <>
            {isLoading && (
                <div className="">
                    <div className="">
                        <span className="">LOADING!</span>
                    </div>
                </div>
            )}
            {isError && <div>Something went wrong ...</div>}
            <>
                <button onClick={() => setOpenFilter(!openFilter)}>Фильтр</button>
                <div className="wrapperFilCat">
                    {openFilter &&
                        <FilterList category={categoryNumber}/>
                    }
                </div>
            </>

            {!isLoading && <div className="wrapperFilCat">
                {products.length > 0 &&
                    products.map(elem => (
                        <MainCard key={elem.productID} elem={elem}/>
                    ))}
            </div>}
        </>
    );
}

export default ViewCategoryProducts;
