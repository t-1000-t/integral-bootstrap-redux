import React, {useEffect, useState} from 'react';
import filters_all from "../../../../../services/filtersAll/filters_all";
import FilterCategoryName from "../FilterCategoryName"

function FilterList({category}) {
    const [listFilter, setListFilter] = useState({})
    const [itemID, setItemID] = useState({})
    const [bool, setBool] = useState(false)
    const [listCheckFilter, setListCheckFilter] = useState({})

    // for change checkBox
    const changeItemID = (id) => {
        setBool(!bool)
        setItemID({itemID: id, bool: bool})
    }

    // get FilterList
    useEffect(() => {
        // if (!itemID) {
        filters_all(category).then(data => {
            return {
                status: data.status, result: data.result.map(e => {
                    return {
                        ...e, filters: e.filters.map((el) => {
                            return {...el, completed: false};
                        })
                    }
                })
            }
        }).then(elem => setListFilter(elem))
    }, [category])

    // copy listFilter
    useEffect(() => {
        if (!listFilter.result) {
            return
        }
        setListCheckFilter({...listFilter})
    }, [listFilter])

    // copy list
    useEffect(() => {
        if (!listCheckFilter.result) {
            return
        }

        function updateList() {
            return {
                status: listCheckFilter.status,
                result: listCheckFilter.result.map((elem) => {
                    return {
                        ...elem,
                        filters: elem.filters.map((el) => {
                            if (el.filterID === itemID.itemID) {
                                return {...el, completed: !el.completed};
                            }
                            return el;
                        }),
                    };
                })
            }
        }
        setListCheckFilter(updateList())
    }, [itemID])


    return (
        <>
            <ul className="">
                {listCheckFilter.status === 1 && listCheckFilter.result.map((elem) => (
                    <li
                        key={elem.optionID}
                        className=""
                    >
                        <FilterCategoryName
                            elem={elem}
                            changeItemID={changeItemID}
                        />
                    </li>
                ))}
            </ul>

        </>
    );
}

export default FilterList

