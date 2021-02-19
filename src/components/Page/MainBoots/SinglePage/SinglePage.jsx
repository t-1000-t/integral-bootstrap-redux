import React, {useState, useEffect, useReducer, Fragment} from 'react'
import axios from "axios"
import routes from "../../../../routes"
import MainCard from "../MainCard";
import mainReducer from "../../../services/ServiceHooks/mainReducer";

export default function SinglePage() {
    const [query, setQuery] = useState('main')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [arrayMain, dispatch] = useReducer(mainReducer, [])

    useEffect(() => {
        let source = axios.CancelToken.source()
        const fetchData = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                const result = await axios(`${routes.URL}/api/${query}`, {
                    cancelToken: source.token
                })
                console.log("AxiosCancel: got response SinglePage")
                const {main} = result.data
                dispatch({type: "getMain", payload: {main}})
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log("AxiosCancel: caught cancel")
                }
                setIsError(true)
            }
            setIsLoading(false)
        }

        fetchData().then(data => data)

        return() => {
            console.log("AxiosCancel: unmounting")
            source.cancel()
        }
    }, [query])

    return (
        <Fragment>
            {isLoading && (
                <div className="text-center">
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            {isError && <div>Something went wrong ..</div>}
            {!isLoading && (
                <div className="album py-1 bg-white">
                    <div className="container">
                        <div className="row">
                            {arrayMain.map((elem, idx) => (
                                <MainCard key={idx} elem={elem}/>))}
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}