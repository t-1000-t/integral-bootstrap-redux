import React, {useState} from "react";
import "./FilterCategoryName.css";

function FilterCategoryName({elem, changeItemID}) {
    const [openFilterElement, setOpenFilterElement] = useState(false)

    return (
        <>
            <button className="filterCategoryButtonName" onClick={() => setOpenFilterElement(!openFilterElement)}>
                {elem.name}
            </button>
            <>
                {openFilterElement && elem.filters.map((item) => {
                    return <button key={item.filterID} className="">
                        <span className="">{item.name}</span>

                        <input
                            type="checkbox"
                            className="inputFilterCategoryName"
                            checked={item.completed}
                            onChange={() => changeItemID(item.filterID)}
                            // onClick={() => {
                            //     setBool(!bool)
                            // }}
                        />
                    </button>
                })}
            </>
        </>
    );
}

export default FilterCategoryName