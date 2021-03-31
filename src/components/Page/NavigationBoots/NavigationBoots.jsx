import React, {useState, useRef, useEffect} from "react";
import Drop from "../MainBoots/Drop";
import categ_list from "../../../services/categ_list";
import "./NavigationBoots.css"
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import listBurger from "../../../routes/routeBurger";
import routes from "../../../routes/routes";
import logo from "../../../images/logo/logo-61x61.jpg"

function NavigationBoots() {
const [isTouchPC, setTouchPC] = useState(false)

    const touchSelect = useRef()
    touchSelect.current = document.querySelector('._touch')
    useEffect(() => {
        setTouchPC(touchSelect.current)
    }, [isTouchPC]);

    return (
        <>
            <Link to={routes.HOME}>
                <img className="header__logo" src={logo} alt="Integral"/>
            </Link>

            <div className="header__menu menu">
                <div className="menu__icon">
                    <span></span>
                </div>
                <Router>
                    <nav className="menu__body">
                        {!isTouchPC && <ul id="menu__list" className="menu__list">
                            <li>
                                <Link to="/" className="menu__link">Каталог товаров</Link>
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
                        </ul>}
                        {isTouchPC &&  <ul id="menu__list-touch" className="menu__list-touch">
                            <li>
                                {listBurger.map((el, i) => (<Link key={i} to={`${el.link}`} className="menu__link">{el.name}</Link>))}
                            </li>
                        </ul>}
                    </nav>



                </Router>
            </div>

        </>
    );
}

export default NavigationBoots;
