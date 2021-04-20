import React, {useState} from "react";
import AddList from "../AddList/AddList";
import "./Drop.css"

const Drop = ({id, category, list}) => {
    const [open, setOpen] = useState(false)

    const toggleList = () => {
        setOpen(!open)
    }

    return (
        <div className="dropBox">
            <button onClick={() => toggleList()}
                    className="drop__button drop__button--pipaluk drop__button--inverted drop__button--round-s drop__button--text-thick">
                {category}
            </button>
            <AddList idRL={id} list={list} open={open}/>
            {open && <div className="drop__outer" onClick={() => toggleList()}>
                <div className="drop__inner">
                    <label className="drop__label">close</label>
                </div>
            </div>}
        </div>)
};

export default Drop;