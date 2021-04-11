import React from 'react';
import routes from "../../../../routes";
import {NavLink} from "react-router-dom";
import "./AddList.css"


function AddList({list, open}) {
    return (
        <ul className={open ? "addListUl_menu__sub-list" : "addListUlBlock_menu__sub-list"}>
            {open && list.map((item, i) => (
                <li className="addListLi_menu__sub-list">
                    <NavLink key={`ItemsName + ${i}`} to={`${routes.PRODUCTS}/${item.category_number}`} className="addList_button addList_button--pipaluk addList_button--inverted  addList_button--round-s addList_button--text-thick">
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default AddList;