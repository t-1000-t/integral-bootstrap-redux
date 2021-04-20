import React, {useState} from "react";
import "./FilterCategoryName.css";

function FilterCategoryName({elem, checked, handleChange}) {
    const [openFilter, setOpenFilter] = useState(false)

    return (
        <>
            <button onClick={() => setOpenFilter(!openFilter)}
                    className="filterCatName_button filterCatName_button--pipaluk filterCatName_button--inverted filterCatName_button--round-s filterCatName_button--text-thick active">
                {elem.name}
            </button>
            <ul className={openFilter ? "" : "filterCatName__ul"}>
                {elem.filters.map((item) => {
                    return <button key={item.filterID} className="filterCatName__ul-btn">
                        <span className="filterCatName__ul-span">{item.name}</span>
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
            {openFilter && <div className="filterCatName__outer" onClick={() => setOpenFilter(!openFilter)}>
                <div className="filterCatName__inner">
                    <label className="filterCatName__label">close</label>
                </div>
            </div>}
        </>
    );
}

export default FilterCategoryName