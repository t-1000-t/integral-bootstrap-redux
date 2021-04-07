import React from 'react';
import routes from "../../../../routes";
import {BrowserRouter as Link} from "react-router-dom";
import "./AddList.css"


function AddList({list, open}) {
    return (
        <ul className={open ? "menu__sub-listUlAddList" : "menu__sub-listUlAddListBlock"}>
            {open && list.map((item, i) => (
                <li key={`ItemsName + ${i}`}>
                    <Link to={`${routes.PRODUCTS}/${item.category_number}`}>
                        <button className="button button--pipaluk button--inverted  button--round-s button--text-thick">
                            {item.name}
                        </button>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default AddList;