import React, {useEffect, useState} from 'react';
import filters_all from "../../../../../services/filtersAll/filters_all";
import FilterCategoryName from "../FilterCategoryName"

function FilterList({category}) {
    const [listFilter, setListFilter] = useState({})

    // get FilterList
    useEffect(() => {
        // if (!itemID) {
        filters_all(category).then(data => ({
            status: data.status, result: data.result.map(e => ({
                ...e, filters: e.filters.map(el => ({
                    ...el, completed: false
                }))
            }))
        })).then(items => setListFilter(items))
    }, [category])

    // copy listFilter
    useEffect(() => {
        if (!listFilter.result) {
            return
        }

    }, [])


    // for change checkBox
    const handleChange = event => {
        if (!listFilter) {
            return
        }

        setListFilter({
            status: listFilter.status, result: listFilter.result.map(e => ({
                ...e, filters: e.filters.map(el => {
                    if (el.filterID === event.target.id) {
                        return {...el, [event.target.completed]: event.target.checked}
                    } else {
                        return {...el}
                    }
                })
            }))
        })
    };

    return (
        <>
            <ul className="">
                {listFilter.status === 1 && listFilter.result.map((elem) => (
                    <li
                        key={elem.optionID}
                        className=""
                    >
                        <label key={elem.optionID}>
                            <FilterCategoryName
                                elem={elem}
                                handleChange={handleChange}
                                checked={listFilter[elem.id]}
                            />
                        </label>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default FilterList

