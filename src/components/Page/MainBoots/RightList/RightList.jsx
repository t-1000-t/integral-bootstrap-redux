import React, {Component} from 'react';
import routes from "../../../../routes";
import closeRightList from "../../../middleware/RightList/closeRightList";
import shortid from "shortid";
import {NavLink} from "react-router-dom";

class RightList extends Component {
    render() {
        const {idRL, list, toggleDropdown} = this.props;
        return (
            <>
                <div id={idRL} className="dropdown-menu">
                    {list.map(item => (
                        <NavLink key={shortid.generate()} to={`${routes.PRODUCTS}/${item.category_number}`}>
                            <div onClick={toggleDropdown} className="dropdown-item"
                            >{item.name}</div>
                        </NavLink>
                    ))}
                    <button onClick={() => closeRightList(idRL)} className="dropdown-item text-muted">Закрыть <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-caret-up-fill text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg></button>
                </div>
            </>
        );
    }
}

export default RightList;