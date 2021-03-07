import React, {useState, useEffect, useReducer} from "react";
import MainCard from "./MainCard";
import routes from "../../../routes";
import axios from "axios"
import itemsReducer from "../../services/ServiceHooks/allReducers/itemsReducer";
import SinglePage from "./SinglePage/SinglePage";


const MainBoots = () => {
    const [isLoadingSpinner, setIsLoadingSpinner] = useState(false)
    const [isError, setIsError] = useState(false)

    // count
    const [count, setCount] = useState(0)


    // Array by text query
    const [isSearchQueryValue, setIsSearchQueryValue] = useState('')
    const [search, setSearch] = useState(null)

    // for clean search text
    useEffect(() => {
        if (!isSearchQueryValue) {
            setSearch(null)
        }
    }, [isSearchQueryValue])

    const [items, dispatch] = useReducer(itemsReducer, [])


    useEffect(() => {
        let source = axios.CancelToken.source()
        const fetchData = async () => {
            setIsLoadingSpinner(true)
            setIsError(false)
            try {
                const result = await axios(`${routes.URLSearch}/api/search/${search}`, {
                    cancelToken: source.token
                })
                console.log("AxiosCancel: got response")
                const {item} = result.data
                dispatch({type: 'addItems', payload: {item}})
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("AxiosCancel: caught cancel")
                }
                setIsError(true)
            }
            setIsLoadingSpinner(false)
        }
        fetchData().then(data => data)

        return () => {
            console.log("AxiosCancel: unmounting");
            source.cancel()
        }
    }, [search])

    return (
        <div className="bg-white">
            <div className="container p-1">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        setSearch(() => isSearchQueryValue)
                    }}
                    className="form-inline mt-0 mt-md-0 ml-sm-2 mr-sm-4"
                >
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Глобальный поиск..."
                        aria-label="Глобальный поиск..."
                        value={isSearchQueryValue}
                        onChange={e => setIsSearchQueryValue(e.target.value)}
                    />
                </form>
            </div>
            {isError && <div>Something went wrong ...</div>}
            <main role="main">
                {isLoadingSpinner && (
                    <div className="text-center">
                        <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
                {!isLoadingSpinner && (
                    <div className="album py-1 bg-white">
                        <div className="container">
                            <div className="row">
                                {items.length !== 0 ? items[count].map((elem, idx) => (
                                    <MainCard key={idx} elem={elem}/>)) : <SinglePage/>}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}


export default MainBoots;