import React, {useState, useEffect, useReducer, useRef} from "react";
import {NavLink} from "react-router-dom";

import Dropright from "../MainBoots/Dropright";
import shortid from "shortid";
import categ_list from "../../services/categ_list";
import routes from "../../../routes/routes";
import navIsShowCatalogReducer from "../../services/ServiceHooks/allReducers/navIsShowCatalogReducer";
import navIsShowReducer from "../../services/ServiceHooks/allReducers/navIsShowReducer";
import dropDownAboutUsReducer from "../../services/ServiceHooks/allReducers/dropDownAboutUsReducer";
import arrSearchReducer from "../../services/ServiceHooks/allReducers/arrSearchReducer";


function NavigationBoots() {
    const [collapsed, setCollapsed] = useState('')

    // selectors function
    const [navISC, dispatchCatalog] = useReducer(navIsShowCatalogReducer, false)
    const [navIS, dispatch] = useReducer(navIsShowReducer, false)
    const [showAU, dispatchAboutUs] = useReducer(dropDownAboutUsReducer, false)
    const [isArraySP, dispatchArraySP] = useReducer(arrSearchReducer, [])


    // useEffect for handleKeyPress
    useEffect(() => {
        function handleKeyPress(e) {
            e.key !== "Escape" ? setCollapsed('') : dispatchCatalog({type: "NAV_SHOW_CATALOG_CLOSE", payload: {navISC}})
        }

        window.addEventListener("keydown", handleKeyPress)
        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [collapsed, navISC])


    // useEffect for handlerPressMouse

    const navRef = useRef()


    useEffect(() => {
        function handleKeyMouse(e) {
            e.target && navRef.current !== e.target.id ? setCollapsed('') : dispatchCatalog({
                type: "NAV_SHOW_CATALOG_CLOSE",
                payload: {navISC}
            })
        }

        window.addEventListener("mouseup", handleKeyMouse)
        return () => window.removeEventListener('mouseup', handleKeyMouse)
    })

    return (
        <header>
            <>
                <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container d-flex justify-content-around">
                        <NavLink
                            onClick={() => dispatch({type: "NAV_SHOW_TOGGLE", payload: {navIS}})}
                            to={`${routes.HOME}`}
                            className="navbar-brand d-flex align-items-center"
                        >
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
                            <strong onClick={() => dispatchArraySP({
                                type: 'ARR_SEARCH',
                                payload: {isArraySP}
                            })}>Integral</strong>
                        </NavLink>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav" id="ulBarDropdownMenuLink">
                                <li
                                    id="closeDropdownShow"
                                    className="nav-item dropdown active"
                                >
                                    <nav
                                        onClick={() => dispatchCatalog({
                                            type: "NAV_SHOW_CATALOG_TOGGLE",
                                            payload: {navISC}
                                        })}
                                        className={navISC ? "nav-link dropdown-toggle show" : "nav-link dropdown-toggle"}
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="false"
                                        aria-expanded={navISC ? "true" : "false"}
                                    >
                                        Каталог товаров
                                    </nav>
                                    <div
                                        id="menuDropdownShow"
                                        className={navISC ? "dropdown-menu row show" : "dropdown-menu row"}
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        {categ_list.category.map(elem => (
                                            <Dropright
                                                key={shortid.generate()}
                                                id={shortid.generate()}
                                                category={elem.category}
                                                list={elem.list}
                                            />
                                        ))}
                                        <button
                                            onClick={() => dispatchCatalog({
                                                type: "NAV_SHOW_CATALOG_TOGGLE",
                                                payload: {navISC}
                                            })}
                                            className="dropdown-item text-muted"
                                        >
                                            Закрыть
                                            <svg
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 16 16"
                                                className="bi bi-caret-up-fill text-success"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button
                            onClick={() => dispatchAboutUs({type: "DROP_DOWN_ABOUT_US", payload: {showAU}})}
                            type="button"
                            className="btn-sm"
                            data-toggle="collapse"
                            data-target="#navbarHeader"
                            aria-controls="navbarHeader"
                            aria-expanded="true"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>
                    </div>
                </nav>
            </>

            {showAU && (
                <div className="bg-dark collapse show" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <div className="pt-5">
                                    <h4 className="text-white">О нас</h4>
                                    <p className="text-muted">
                                        Мы занимаемся продажей и сборкой компьютеров в Украине.
                                        Наш высокий уровень сотрудничества подтверждается официальным статусом работы.
                                        В каталоге нашего интернет-магазина представлены сотни конфигураций под разные
                                        задачи и бюджеты.
                                        Мы учтем все пожелания по конфигурации, внешнему виду, способу оплаты, времени
                                        сборки и доставки.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Контакты</h4>

                                <ul className="list-unstyled">
                                    <NavLink to={routes.CONTACT} className="text-white">
                                        <li>Контакты</li>
                                    </NavLink>
                                    <li>
                                        <a
                                            href="https://sending-feedback-form.herokuapp.com"
                                            className="text-white"
                                        >
                                            Форма обратной связи
                                        </a>
                                        {/* <NavLink to={routes.FEEDBACK} className="text-white">
                        <li>Форма обратной связи</li>
                      </NavLink> */}
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white"
                                        >
                                            Оплата
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default NavigationBoots;
