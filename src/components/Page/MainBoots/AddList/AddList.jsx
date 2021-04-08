import React from 'react';
import routes from "../../../../routes";
import {BrowserRouter as Link} from "react-router-dom";
import "./AddList.css"


function AddList({list, open}) {
    return (
        <ul className={open ? "addListUl_menu__sub-list" : "addListUlBlock_menu__sub-list"}>
            {open && list.map((item, i) => (
                <li key={`ItemsName + ${i}`} className="addListLi_menu__sub-list">
                    <Link to={`${routes.PRODUCTS}/${item.category_number}`}>
                        <button className="addList_button addList_button--pipaluk addList_button--inverted  addList_button--round-s addList_button--text-thick">
                            {item.name}
                        </button>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default AddList;