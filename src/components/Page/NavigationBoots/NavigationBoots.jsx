import React from "react";
import Drop from "../MainBoots/Drop";
import categ_list from "../../../services/categ_list";
import "./NavigationBoots.css"

function NavigationBoots() {
    return (
        <>
            <a href="/#" className="header__logo">
                <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 19 12"
                    className="bi bi-laptop"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"
                    />
                    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
                </svg>
            </a>

            <div className="header__menu menu">
                <div className="menu__icon">
                    <span></span>
                </div>
                <nav className="menu__body">
                    <ul id="menu__list" className="menu__list">
                        <li>
                            <a href="/#" className="menu__link">Каталог товаров</a>
                            <span className="menu__arrow"></span>
                            <ul className="menu__sub-list">
                                {categ_list.category.map((elem, i) => (
                                    <li>
                                        <Drop
                                            key={i}
                                            category={elem.category}
                                            list={elem.list}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    );
}

export default NavigationBoots;
