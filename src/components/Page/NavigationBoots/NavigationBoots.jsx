import React, {Component} from "react";
import {connect} from "react-redux";
import NavIsShowActions from "../../../redux/Actions/NavIsShowAction";
import dropDownAboutUsAction from "../../../redux/Actions/dropDownAboutUsAction";
import {NavLink} from "react-router-dom";
import closeDropdown from "../../middleware/closeDropdown";
import showDropdown from "../../middleware/showDropdown";
import Dropright from "../MainBoots/Dropright";
import shortid from "shortid";
import categ_list from "../../services/categ_list";
import routes from "../../../routes/routes";


class NavigationBoots extends Component {


    state = {
        query: ""
    };

    componentDidMount() {
        this._isMounted = true;
        window.addEventListener("keydown", this.handleKeyPress);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isNavCatShow !== this.props.isNavCatShow && this.props.isNavCatShow === false) {
            // уберает стили класов в bootstrap
            closeDropdown();
        }
        if (this.props.isNavCatShow === true) {
            showDropdown();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener("keydown", this.handleKeyPress);
    }

    // Escape or click another place, close dropDown
    handleKeyPress = (e) => {
        if (e.code !== "Escape") {
            return;
        }
        // меняет стейт isNavShow на false
        this.props.NavIsShowFalse();
    };

    handleChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    };

    // Open or Close category


    render() {
        const {isNavCatShow, isShowAboutUs, NavIsShowToggle, NavIsShowFalse, showAboutUs } = this.props;
        const {query} = this.state;
        return (
            <header>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container d-flex">
                            <a href="/#" className="navbar-brand d-flex align-items-center">
                                <svg width="1.5em" height="1.5em" viewBox="0 0 19 12" className="bi bi-laptop"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
                                    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
                                </svg>
                                <strong>Integral</strong>
                            </a>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li id="closeDropdownShow"
                                        className="nav-item dropdown active">
                                        <a href="/#" onClick={NavIsShowToggle} className="nav-link dropdown-toggle"
                                           id="navbarDropdownMenuLink"
                                           role="button" data-toggle="dropdown" aria-haspopup="false"
                                           aria-expanded={isNavCatShow ? "true" : "false"}>
                                            Каталог товаров
                                        </a>
                                        <div id="menuDropdownShow" className="dropdown-menu row"
                                             aria-labelledby="navbarDropdownMenuLink">
                                            {categ_list.category.map(elem => (
                                                <Dropright key={shortid.generate()} id={shortid.generate()}
                                                           category={elem.category} list={elem.list} />
                                            ))}
                                            <button onClick={NavIsShowFalse} className="dropdown-item text-muted"
                                                    href="/#">Закрыть <svg width="1em"
                                                                           height="1em"
                                                                           viewBox="0 0 16 16"
                                                                           className="bi bi-caret-up-fill text-success"
                                                                           fill="currentColor"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                            </svg></button>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <form className="form-inline mt-0 mt-md-0 ml-sm-2 mr-sm-4">
                                <input className="form-control mr-sm-2" type="text" placeholder="Поиск..."
                                       aria-label="Поиск..." value={query} onChange={this.handleChange}/>
                            </form>

                            <button onClick={() => showAboutUs(isShowAboutUs)} type="button" className="btn-sm"
                                    data-toggle="collapse"
                                    data-target="#navbarHeader"
                                    aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </div>

                {isShowAboutUs && <div className="bg-dark collapse show" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">О нас</h4>
                                <p className="text-muted">Add some information about the album below, the author, or any
                                    other
                                    background context. Make it a few sentences long so folks can pick up some
                                    informative
                                    tidbits. Then, link them off to some social networking sites or contact
                                    information.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">

                                <h4 className="text-white">Контакты</h4>

                                <ul className="list-unstyled">
                                    <NavLink to={`${routes.CONTACT}`} className="text-white">
                                       <li>contact page</li>
                                    </NavLink>
                                    <li><a href="/#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="/#" className="text-white">Email</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        isNavCatShow: state.isNavCatShow,
        isShowAboutUs: state.isShowAboutUs,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        NavIsShowToggle: (isNavShow) => dispatch(NavIsShowActions.NavIsShowToggle(isNavShow)),
        NavIsShowFalse: () => dispatch(NavIsShowActions.NavIsShowFalse()),
        showAboutUs: (isShowAboutUs) => dispatch(dropDownAboutUsAction.showAboutUs(isShowAboutUs))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBoots);