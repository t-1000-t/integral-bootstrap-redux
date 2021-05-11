import React, {useState, useEffect, useReducer} from "react"
import {useLocation, useParams, useRouteMatch} from "react-router-dom"
import axios from 'axios'
import routes from "../../../../routes";
import MainCard from "../MainCard";
import forGetArrProductsReducer
    from "../../../../services/ServiceHooks/allReducers/forGetArrProductsReducer";
import "./ViewCategoryProducts.css"
import filterIconW from "../../../../images/iconNavigation/baseline_tune_white_24dp.png"
import FilterList from "./FilterList";
import LoaderBase from "../../../../modals/LoaderBase/LoaderBase";
import DotLoader from "react-spinners/DotLoader";


function ViewCategoryProducts() {
    const [currentPage] = useState(0)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [openFilter, setOpenFilter] = useState(false)
    const [isBtn, setIsBtn] = useState([])
    const [color] = useState("#4170a9");

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

    console.log(isBtn)
    return (
        <>
            {isLoading && (
                <LoaderBase className="">
                    <DotLoader color={color}/>
                </LoaderBase>
            )}
            {isError && <div>Something went wrong ...</div>}
            <div className="container__viewCatProd">
                <div className="wrapperFilProd__viewCatProd">
                    <ul className="filter__list">
                        <li className="filter__li">
                            <button className="filter__btn" type="button" disabled={isBtn.length === 0}>
                                <img onClick={() => setOpenFilter(!openFilter)} className="filter__link"
                                     src={isBtn.length === 0 ? "" : filterIconW}
                                     alt="OFF"/>
                            </button>
                            <span className="filter__arrow"></span>
                            <ul className={openFilter ? "filter__sub-list-active" : "filter__sub-list"}>
                                <FilterList category={categoryNumber} setIsBtn={setIsBtn}/>
                            </ul>
                        </li>
                    </ul>
                </div>

                {!isLoading && <div className="wrapperFilCat">
                    {products.length > 0 &&
                    products.map(elem => (
                        <MainCard key={elem.productID} elem={elem}/>
                    ))}
                </div>}
            </div>
        </>
    );
}

export default ViewCategoryProducts;
