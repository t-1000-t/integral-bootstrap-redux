import React, {useState, useEffect, useReducer} from "react";
import routes from "../../../routes";
import axios from "axios"
import itemsReducer from "../../../services/ServiceHooks/allReducers/itemsReducer";
import SinglePage from "./SinglePage/SinglePage";



const MainBoots = () => {
    const [isLoadingSpinner, setIsLoadingSpinner] = useState(false)
    const [isError, setIsError] = useState(false)


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

    console.log("search", search)
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

                {/*<main className="page">*/}
                {/*    {isLoadingSpinner && (*/}
                {/*        <div className="text-center">*/}
                {/*            <div className="spinner-border m-5" role="status">*/}
                {/*                <span className="sr-only">Loading...</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*    {!isLoadingSpinner && (*/}
                {/*        <div className="album py-1 bg-white">*/}
                {/*            <div className="container">*/}
                {/*                <SinglePage/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</main>*/}
            <main className="page">
                <section className="page__section page__section_1">
                    <h1 className="page__title">Отличная статья</h1>
                    <div className="page__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                    </div>
                </section>
                <section className="page__section page__section_2">
                    <h2 className="page__sub-title">Отличный раздел сайта</h2>
                    <div className="page__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                    </div>
                </section>
                <section className="page__section page__section_3">
                    <h2 className="page__sub-title">Отличный раздел сайта</h2>
                    <div className="page__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, blanditiis cum dicta distinctio
                            eius et eveniet hic nostrum numquam perferendis possimus quam sequi ullam? Dignissimos
                            libero
                            molestias officia? Deserunt, maiores?</p>
                    </div>
                </section>
            </main>

        </>
    )
}


export default MainBoots;