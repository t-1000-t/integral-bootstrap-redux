import React, {useState} from "react";
import "./FilterCategoryName.css";

function FilterCategoryName({elem, checked, handleChange}) {
    const [openFilterElement, setOpenFilterElement] = useState(false)

    return (
        <>
            <button className="" onClick={() => setOpenFilterElement(!openFilterElement)}>
                {elem.name}
            </button>
            <ul className="">
                {openFilterElement && elem.filters.map((item) => {
                    return <button key={item.filterID} className="">
                        <span className="">{item.name}</span>
                        <input
                            // className="inputFilterCategoryName"
                            id={item.filterID}
                            completed={checked}
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                    </button>
                })}
            </ul>
        </>
    );
}

export default FilterCategoryName