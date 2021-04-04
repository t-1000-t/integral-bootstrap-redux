import React, {useState, useEffect, useReducer} from "react";
import routes from "../../../routes";
import axios from "axios"
import itemsReducer from "../../../services/ServiceHooks/allReducers/itemsReducer";
import MainCard from "./MainCard";
import navSearchQueryReducer from "../../../services/ServiceHooks/allReducers/navSearchQueryReducer";

import Carousel from "./Carousel/Carousel";
import "./MainBoots.css"

const MainBoots = () => {
    const [isLoadingSpinner, setIsLoadingSpinner] = useState(false)
    const [isError, setIsError] = useState(false)
    const [text, setText] = useState('')

    const [items, dispatch] = useReducer(itemsReducer, [])

    // reducer function
    const [search, dispatchText] = useReducer(navSearchQueryReducer, '')

    useEffect(() => {
        let source = axios.CancelToken.source()
        const fetchData = async () => {
            setIsLoadingSpinner(true)
            setIsError(false)
            try {
                const result = await axios(`${routes.URLSearch}/api${routes.SEARCH}/${search}`, {
                    cancelToken: source.token
                })
                console.log("AxiosCancel: got response")
                const {item} = result.data
                console.log(item)
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
        <>
            {isError && <div>Something went wrong ...</div>}

            <main className="page">
                {isLoadingSpinner && (
                    <div>
                        <div>
                            <span>Loading...</span>
                        </div>
                    </div>
                )}
                <div className="appContainer">
                    <Carousel />
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        dispatchText({type: 'textSearchWord', payload: {text: text}})
                    }}
                >
                    <input
                        type="text"
                        placeholder="Глобальный поиск..."
                        aria-label="Глобальный поиск..."
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </form>
                {!isLoadingSpinner && (
                    items.map(e => <MainCard elem={e}/>)
                )}
            </main>
          </>
    )
}


export default MainBoots;