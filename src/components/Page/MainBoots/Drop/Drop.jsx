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
                    className="drop__button drop__button--pipaluk drop__button--inverted  drop__button--round-s drop__button--text-thick">
                {category}
            </button>
            <AddList idRL={id} list={list} open={open}/>
            {open && <div className="drop__outer" onClick={() => toggleList()}>
                <div className="drop__inner">
                <label className="drop__label">Back</label>
                </div>
                </div>}
            {/*{open && <button onClick={() => toggleList()} className="drop__button drop__button--pipaluk drop__button--inverted  drop__button--round-s drop__button--text-thick">*/}
            {/*    <p>Закрыть</p>*/}
            {/*    <svg*/}
            {/*        width="1em"*/}
            {/*        height="1em"*/}
            {/*        viewBox="0 0 16 16"*/}
            {/*        className="bi bi-caret-up-fill text-success"*/}
            {/*        fill="currentColor"*/}
            {/*        xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path*/}
            {/*            d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>*/}
            {/*    </svg>*/}
            {/*</button>}*/}
        </div>)
};

export default Drop;