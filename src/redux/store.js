import { createStore, combineReducers } from "redux";
import NavIsShowCatalogReducer from "./Reducers/NavIsShowCatalogReducer";
import dropDownAboutUsReducer from "./Reducers/dropDownAboutUsReducer";
import navSearchQueryReducer from "./Reducers/navSearchQueryReducer";
import mainBootsLoadingReducer from "./Reducers/mainBootsLoadingReducer";
import arrMainBootsReducer from "./Reducers/arrMainBootsReducer";
import viewCategoryProductsReducer from "./Reducers/viewCategoryProductsReducer";
import forGetArrProductsReducer from "./Reducers/forGetArrProductsReducer";
import arrSearchReducer from "./Reducers/arrSearchReducer";
import searchLoadingToggleReducer from "./Reducers/searchLoadingToggleReducer";

const rootReducer = combineReducers({
  isNavCatShow: NavIsShowCatalogReducer,
  isShowAboutUs: dropDownAboutUsReducer,
  textSearchQueryValue: navSearchQueryReducer,
  mainBootsloadingSpinner: mainBootsLoadingReducer,
  arrMaBo: arrMainBootsReducer,
  isLoadingVCP: viewCategoryProductsReducer,
  arrProducts: forGetArrProductsReducer,
  arraySP: arrSearchReducer,
  isLoadingSearch: searchLoadingToggleReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
