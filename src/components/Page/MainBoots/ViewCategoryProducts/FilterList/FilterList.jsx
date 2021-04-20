import React, {useEffect, useState} from 'react';
import filters_all from "../../../../../services/filtersAll/filters_all";
import FilterCategoryName from "../FilterCategoryName"
import {useHistory, useParams} from "react-router-dom";
import routes from "../../../../../routes/routes";
import "./FilterList.css"


function FilterList({category, setIsBtn}) {
    const [listFilter, setListFilter] = useState({})
    const [arrayFilterCheck, setArrayFilterCheck] = useState([])
    const [linkParams, setLinkParams] = useState('')
    const [matchParams, setMatchParams] = useState('')

    // get FilterList
    useEffect(() => {
        // if (!itemID) {
        filters_all(category).then(data => ({
            status: data.status, result: data.result.map(e => ({
                ...e, filters: e.filters.map(el => ({
                    ...el, completed: false
                }))
            }))
        })).then(items => {
            setListFilter(items)
            setIsBtn(items.result)
        })
    }, [category, setIsBtn])

    // for change checkBox
    const handleChange = event => {
        if (!listFilter) {
            return
        }

        setListFilter({
            status: listFilter.status, result: listFilter.result.map(e => ({
                ...e, filters: e.filters.map(el => {
                    if (el.filterID === event.target.id) {
                        return {...el, completed: event.target.checked}
                    } else {
                        return {...el}
                    }
                })
            }))
        })
    };

    // for array filterID
    useEffect(() => {
        if (listFilter.status !== 1) {
            return
        }
        const arrFilCheck = []
        listFilter.result.map(e => (
            e.filters.forEach(el => {
                if (el.completed === true) {
                    arrFilCheck.push(el.filterID)
                }
            })
        ))
        setArrayFilterCheck(arrFilCheck)
    }, [listFilter])

    // console.log("arr", arrayFilterCheck)


    // for string params
    useEffect(() => {
        // for request search filter
        const stringFiltersParams = arrayFilterCheck.reduce((sum, item) => {
            return sum + `${item}/`;
        }, "");
        // for set match params for EXAMPLE
        const stringMatchParams = arrayFilterCheck.reduce((sum, item) => {
            return sum + `&filters[]=${item}`;
        }, "");

        setLinkParams(stringFiltersParams)
        setMatchParams(stringMatchParams)
    }, [arrayFilterCheck])

    // useParams
    const params = useParams()
    const catNum = params.categoryNum

    // useHistory
    const history = useHistory()

    // history push pathname
    useEffect(() => {
        history.push({
            pathname: `${routes.PRODUCTS_LIST}/${catNum}/${linkParams}`
        });
    }, [matchParams, catNum, history, linkParams])

    return (
        <>
            {listFilter.status === 1 && listFilter.result.map((elem) => (
                <li
                    key={elem.optionID}
                    className="filter__wrapper"
                >
                    <FilterCategoryName
                        elem={elem}
                        handleChange={handleChange}
                        checked={listFilter[elem.id]}
                    />
                </li>
            ))}
        </>
    );
}

export default FilterList

