import React from "react";

function Label({elem, updateLabelCheck}) {
    const {completed, categoryID} = elem

    return (
        <div className='p-3 form-check'>
            <input onChange={() => updateLabelCheck(categoryID)}
                   checked={completed}
                   className="form-check-input"
                   type="checkbox"
                   completed={completed}/>
            <label htmlFor={elem.categoryID}>{elem.name}</label>
        </div>)
}

export default Label