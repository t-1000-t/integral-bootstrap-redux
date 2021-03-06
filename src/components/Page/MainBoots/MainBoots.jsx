import React, {useState, useEffect, useReducer} from "react";
import routes from "../../../routes";
import axios from "axios"
import itemsReducer from "../../../services/ServiceHooks/allReducers/itemsReducer";
import MainCard from "./MainCard";
import navSearchQueryReducer from "../../../services/ServiceHooks/allReducers/navSearchQueryReducer";

import Carousel from "./Carousel/Carousel";
import "./MainBoots.css"
import categ_list from "../../../services/categ_list.json";
import Drop from "./Drop";
import FeedBackForm from "./FeedBackForm";

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
            if (!search) {
                dispatch({type: 'addItems', payload: {item: []}})
                setIsLoadingSpinner(false)
                return
            }
            try {
                const result = await axios(`${routes.URLSearch}/api/${routes.SEARCH}/${search}`, {
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

    // check isTouch
    const [someMain, setSomeMain] = useState(null)
    useEffect(() => {
        const isTouch = document.querySelector('._touch')
        !isTouch ? setSomeMain(true) : setSomeMain(false)
    }, [someMain])

    const [toggleCategory, setToggleCategory] = useState(false)
    const [toggleForm, setToggleForm] = useState(false)
    return (
        <div className="page__container">
            {isError && <div>Something went wrong ...</div>}
            <div className="appContainer">
                <Carousel/>
            </div>
            <div className="main__searchGlobal">
                <form className="main__formGlobal"
                      onSubmit={(e) => {
                          e.preventDefault()
                          dispatchText({type: 'textSearchWord', payload: {text: text}})
                      }}
                >
                    <input className="main__inputGlobal"
                           type="text"
                           placeholder="Глобальный поиск..."
                           aria-label="Глобальный поиск..."
                           value={text}
                           onChange={e => setText(e.target.value)}
                    />
                </form>
            </div>
            {!someMain &&
            <ul id="menu__listMain" className="menu__listMain">
                <li className="containerMain">
                    <button onClick={() => {
                        setToggleCategory(!toggleCategory)
                    }} className="menu__button menu__button--pipaluk menu__button--round-s">
                        Каталог товаров
                    </button>
                    <span className="menu__arrowMain"></span>

                    <ul className={toggleCategory ? "menu__sub-listUlMain" : "menu__sub-listUlMainBlock"}>
                        {categ_list.category.map((elem, i) => (
                            <li key={`li + ${i}`} className="menu__sub-listLiMain">
                                <Drop
                                    category={elem.category}
                                    list={elem.list}
                                />
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>}
            <div className="containerListCard">
                {isLoadingSpinner && (
                    <div>
                        <div>
                            <span>Loading...</span>
                        </div>
                    </div>
                )}
                {!isLoadingSpinner && items.length > 0 && (
                    items[0].map((e, i) => <MainCard key={`mainCard-${i}`} elem={e}/>)
                )}
            </div>
            <button onClick={() => setToggleForm(!toggleForm)}
                    className="menu__button menu__button--pipaluk menu__button--round-s">
                форма обратной сывязи
            </button>
            {toggleForm && <div className={toggleForm ? "main__FormVisible" : "main__FormBlock"}>
                <FeedBackForm toggleForm={toggleForm}/>
            </div>}
        </div>
    )
}


export default MainBoots;