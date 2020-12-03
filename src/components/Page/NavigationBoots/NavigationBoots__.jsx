import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useFormNav, usePrevious } from "../../services/useCustome/useCustome";
import useFetchSearch from "../../services/useFetchSearch/useFetchSearch";
import navIsShowAction from "../../../redux/Actions/navIsShowAction";
import dropDownAboutUsAction from "../../../redux/Actions/dropDownAboutUsAction";
import navSearchQueryAction from "../../../redux/Actions/navSearchQueryAction";
// import arrSearchAction from "../../../redux/Actions/arrSearchAction";
import searchLoadingToggle from "../../../redux/Actions/searchLoadingToggleAction";
import { NavLink } from "react-router-dom";
import closeDropdown from "../../middleware/closeDropdown";
import showDropdown from "../../middleware/showDropdown";
import Dropright from "../MainBoots/Dropright";
import shortid from "shortid";
import categ_list from "../../services/categ_list";
import routes from "../../../routes/routes";

const NavigationBoots = ({
  isNavCatShow,
  isShowAboutUs,
  textSearchQueryValue,
  NavIsShowToggle,
  NavIsShowFalse,
  showAboutUs,
  navSearchQuery,
  isSearchQueryValue
}) => {
  const [values, handleChange] = useFormNav({ searchText: "" });
  // const [arrData, setArrData] = useState({});
  const [url, setUrl] = useState();
  const getChangeText = e => {
    e.preventDefault();
    console.log("LINK", isSearchQueryValue);
    setUrl(`http://localhost:5000/api/search/${isSearchQueryValue}`);
  };

  const { data, loading } = useFetchSearch(url);

  useEffect(() => {
    searchLoadingToggle.searchLoadingToggleAction();
  }, [loading]);
  useEffect(() => {
    if (data === null) {
      return;
    }
    console.log("data2: ", data);
  }, [data]);

  // useEffect 1
  useEffect(() => {
    navSearchQuery(values.searchText);
  }, [navSearchQuery, values.searchText]);
  // prevState & state
  const prevNavCatShow = usePrevious(isNavCatShow);
  //____________________________________________________
  // useEffect 2
  useEffect(() => {
    if (isNavCatShow !== prevNavCatShow && isNavCatShow === false) {
      // уберает стили класов в bootstrap
      closeDropdown();
    }
    if (isNavCatShow === true) {
      showDropdown();
    }
  }, [isNavCatShow, prevNavCatShow]);
  // useEffect 3
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.code !== "Escape") {
        return;
      }
      NavIsShowFalse();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [NavIsShowFalse]);

  return (
    <header>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container d-flex">
            <a href="/#" className="navbar-brand d-flex align-items-center">
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
                <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z" />
              </svg>
              <strong>Integral</strong>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li id="closeDropdownShow" className="nav-item dropdown active">
                  <a
                    href="/#"
                    onClick={NavIsShowToggle}
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="false"
                    aria-expanded={isNavCatShow ? "true" : "false"}
                  >
                    Каталог товаров
                  </a>
                  <div
                    id="menuDropdownShow"
                    className="dropdown-menu row"
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
                      onClick={NavIsShowFalse}
                      className="dropdown-item text-muted"
                      href="/#"
                    >
                      Закрыть{" "}
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-caret-up-fill text-success"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <form
              onSubmit={getChangeText}
              className="form-inline mt-0 mt-md-0 ml-sm-2 mr-sm-4"
            >
              <input
                name="searchText"
                className="form-control mr-sm-2"
                type="text"
                placeholder="Поиск..."
                aria-label="Поиск..."
                value={textSearchQueryValue}
                onChange={handleChange}
              />
            </form>

            <button
              onClick={() => showAboutUs(isShowAboutUs)}
              type="button"
              className="btn-sm"
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>

      {isShowAboutUs && (
        <div className="bg-dark collapse show" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">О нас</h4>
                <p className="text-muted">
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Контакты</h4>

                <ul className="list-unstyled">
                  <NavLink to={`${routes.CONTACT}`} className="text-white">
                    <li>contact page</li>
                  </NavLink>
                  <li>
                    <a href="/#" className="text-white">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="text-white">
                      Email
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
};

const mapStateToProps = state => {
  return {
    isNavCatShow: state.isNavCatShow,
    isShowAboutUs: state.isShowAboutUs,
    isSearchQueryValue: state.textSearchQueryValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    NavIsShowToggle: isNavShow =>
      dispatch(navIsShowAction.navIsShowToggle(isNavShow)),
    NavIsShowFalse: () => dispatch(navIsShowAction.navIsShowFalse()),
    showAboutUs: isShowAboutUs =>
      dispatch(dropDownAboutUsAction.showAboutUs(isShowAboutUs)),
    navSearchQuery: isSearchQueryValue =>
      dispatch(navSearchQueryAction.navSearchQuery(isSearchQueryValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBoots);
