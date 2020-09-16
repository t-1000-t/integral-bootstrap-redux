import { createStore, combineReducers } from 'redux';
import NavIsShowCatalogReducer from "./Reducers/NavIsShowCatalogReducer";
import dropDownAboutUsReducer from "./Reducers/dropDownAboutUsReducer";
import navSearchQueryReducer from "./Reducers/navSearchQueryReducer";

console.log(navSearchQueryReducer);

const rootReducer = combineReducers({
    isNavCatShow: NavIsShowCatalogReducer,
    isShowAboutUs: dropDownAboutUsReducer,
    textSearchQueryValue: navSearchQueryReducer,
});


const store = createStore(rootReducer);

export default store;