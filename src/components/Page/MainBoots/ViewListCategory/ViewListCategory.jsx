import React, {useState, useEffect, useReducer} from "react"
import axios from "axios"
import routes from "../../../../routes/routes";
import arrListAllCategories from "../../../../services/ServiceHooks/allReducers/arrListAllCategories";
import Label from "./Label/Label";
import {v4 as uuidv4} from "uuid"

function ViewListCategory() {
    const [status, setStatus] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [listLabel, setListLabel] = useState([])


    const [list, dispatchL] = useReducer(arrListAllCategories, [])
    // Start Effect
    useEffect(() => {

        const source = axios.CancelToken.source()
        const fetchData = async () => {
            setIsLoading(true)
            setIsError(false)
            try {
                await axios.get(`${routes.URL}/api${routes.CATEGORIES}`, {
                    cancelToken: source.token
                })
                    .then(res => res.data)
                    .then(array => {
                        console.log("AxiosCancel: got response products")
                        const arr = []
                        arr.push({status: array.status})
                        const completedArr = array.result.map(elem => {
                            return {...elem, completed: false, id: uuidv4()}
                        })
                        arr.push(completedArr)
                        setStatus(arr[0].status)
                        dispatchL({type: "ARR_ALL_LIST_CATEGORY", payload: arr[1]})
                    })
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
    }, [])

    // LocalStorage getItem Effect by CheckLabels
    useEffect(() => {
        setListLabel(list)
    }, [list])


    // function for checked status Label
    const updateLabelCheck = (id) => {
        const n = listLabel.map(e => e.categoryID === id ? {...e, completed: !e.completed} : e)
        setListLabel(n)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <>
            {isLoading && (
                <div className="text-center mt-5">
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            )}

            {!isLoading && (<div className="container mt-5">
                {isError && <div>Something went wrong ...</div>}
                <form className="d-flex flex-wrap" onSubmit={handlerSubmit}>
                    {status === 1 && listLabel.length > 0 && listLabel.map(elem =>
                        <Label key={elem.id} updateLabelCheck={updateLabelCheck} elem={elem}/>
                    )}
                    {status === 1 && listLabel.length > 0 && (<button type="submit">ADD</button>)}
                </form>
                {status === 1 && listLabel.length > 0 &&
                (<button type="button" onClick={() => {}}>RESET</button>)}

            </div>)
            }
        </>
    )
}

export default ViewListCategory