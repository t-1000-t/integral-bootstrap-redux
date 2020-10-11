import { createStore, combineReducers } from 'redux';
import NavIsShowCatalogReducer from "./Reducers/NavIsShowCatalogReducer";
import dropDownAboutUsReducer from "./Reducers/dropDownAboutUsReducer";
import navSearchQueryReducer from "./Reducers/navSearchQueryReducer";
import mainBootsLoadingReducer from "./Reducers/mainBootsLoadingReducer";
import arrMainBootsReducer from "./Reducers/arrMainBootsReducer";
import viewCategoryProductsReducer from "./Reducers/viewCategoryProductsReducer";
import forGetArrProductsAction from "./Reducers/forGetArrProductsReducer";

const rootReducer = combineReducers({
    isNavCatShow: NavIsShowCatalogReducer,
    isShowAboutUs: dropDownAboutUsReducer,
    textSearchQueryValue: navSearchQueryReducer,
    mainBootsloadingSpinner: mainBootsLoadingReducer,
    arrMaBo: arrMainBootsReducer,
    isLoadingVCP: viewCategoryProductsReducer,
    arrProducts: forGetArrProductsAction,
});


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;