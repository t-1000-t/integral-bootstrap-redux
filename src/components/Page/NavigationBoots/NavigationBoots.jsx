import React, {useState, useEffect} from "react";
import Drop from "../MainBoots/Drop";
import categ_list from "../../../services/categ_list";
import "./NavigationBoots.css"
import {NavLink} from "react-router-dom";
import listBurger from "../../../routes/routeBurger";
import routes from "../../../routes/routes";
import logo from "../../../images/logo/logo-61x61.jpg"


function NavigationBoots() {
    const [some, setSome] = useState(null)
    useEffect(() => {
        const isTouch = document.querySelector('._touch')
        if (!isTouch) {
            setSome(false)
        } else {
            setSome(true)
        }
    }, [some])

    return (
        <>
            <NavLink to={routes.HOME}>
                <img className="header__logo" src={logo} alt="Integral"/>
            </NavLink>

            <div className="header__menu menu">
                <div className="menu__icon">
                    <span></span>
                </div>
                <nav className="menu__body">
                    {!some && <ul id="menu__list" className="menu__list">
                        <li>
                            <NavLink to="/" className="menu__link">Каталог товаров</NavLink>
                            <span className="menu__arrow"></span>
                            <ul className="menu__sub-list">
                                {categ_list.category.map((elem, i) => (
                                    <li key={`li + ${i}`}>
                                        <Drop
                                            category={elem.category}
                                            list={elem.list}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>}
                    {some && <ul id="menu__list-touch" className="menu__list-touch">
                        <li>
                            {listBurger.map((el, i) => (
                                <NavLink key={i} to={`${el.link}`} className="menu__link">{el.name}</NavLink>))}
                        </li>
                    </ul>}
                </nav>
            </div>

        </>
    );
}

export default NavigationBoots;
