import React, {useState} from 'react';
import routes from "../../../../routes";
import {BrowserRouter as Link} from "react-router-dom";


function AddList({list, open}) {
    return (
        <ul>
            {open && list.map((item, i) => (
                <li key={`ItemsName + ${i}`}>
                    <Link to={`${routes.PRODUCTS}/${item.category_number}`}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default AddList;