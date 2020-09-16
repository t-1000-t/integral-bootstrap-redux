import { createStore, combineReducers } from 'redux';
import NavIsShowCatalogReducer from "./Reducers/NavIsShowCatalogReducer";
import dropDownAboutUsReducer from "./Reducers/dropDownAboutUsReducer";

const rootReducer = combineReducers({
    isNavCatShow: NavIsShowCatalogReducer,
    isShowAboutUs: dropDownAboutUsReducer,

});


const store = createStore(rootReducer);

export default store;