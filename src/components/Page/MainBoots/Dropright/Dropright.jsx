import React from "react";
import RightList from "../RightList/RightList";
import shortid from "shortid";
import showRightList from "../../../middleware/RightList/showRightList";

const Dropright = ({id, category, list, toggleDropdown}) => (
    <div key={shortid.generate()} className="dropright ">
        <button onClick={() => showRightList(id)} type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
            {category}
        </button>
        <RightList idRL={id} list={list} toggleDropdown={toggleDropdown}/>
    </div>
);

export default Dropright;