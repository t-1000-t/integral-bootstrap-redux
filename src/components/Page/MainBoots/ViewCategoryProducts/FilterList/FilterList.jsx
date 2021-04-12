import React, {useEffect, useState} from 'react';
import filters_all from "../../../../../services/filtersAll/filters_all";
import ListCategoryName from "../ListCategoryName"

function FilterList({category}) {
    const [listFilter, setListFilter] = useState({})

    useEffect(() => {
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
        }).then(elem => {
            setListFilter(elem)
        })
    }, [category])

    return (
        <>
            <div className="">
                <ul className="">
                    {listFilter.status === 1 &&
                    listFilter.result.map((elem) => (
                        <li
                            key={elem.optionID}
                            className=""
                        >
                            <ListCategoryName
                                elem={elem}
                                // updateElemStatus={this.updateElemStatus}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default FilterList

