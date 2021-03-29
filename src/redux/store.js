import { createStore, combineReducers } from "redux";
import navSearchQueryReducer from "./Reducers/navSearchQueryReducer";
import mainBootsLoadingReducer from "./Reducers/mainBootsLoadingReducer";
import arrMainBootsReducer from "./Reducers/arrMainBootsReducer";
import viewCategoryProductsReducer from "./Reducers/viewCategoryProductsReducer";
import forGetArrProductsReducer from "../services/ServiceHooks/allReducers/forGetArrProductsReducer";
import searchLoadingToggleReducer from "./Reducers/searchLoadingToggleReducer";
import arrSearchReducer from "../services/ServiceHooks/allReducers/arrSearchReducer";
import dropDownAboutUsReducer from "../services/ServiceHooks/allReducers/dropDownAboutUsReducer";
import navIsShowCatalogReducer from "../services/ServiceHooks/allReducers/navIsShowCatalogReducer";
import navIsShowReducer from "../services/ServiceHooks/allReducers/navIsShowReducer";
import itemsReducer from "../services/ServiceHooks/allReducers/itemsReducer";
import mainReducer from "../services/ServiceHooks/allReducers/mainReducer";

const rootReducer = combineReducers({
  arrSearchReducer,
  isShowAboutUs: dropDownAboutUsReducer,
  navIsShowCatalog: navIsShowCatalogReducer,
  navIsShowReducer,
  itemsReducer,
  mainReducer,
  forGetArrProductsReducer,

  textSearchQueryValue: navSearchQueryReducer,
  mainBootsloadingSpinner: mainBootsLoadingReducer,
  arrMaBo: arrMainBootsReducer,
  isLoadingVCP: viewCategoryProductsReducer,
  arrProducts: forGetArrProductsReducer,
  isLoadingSearch: searchLoadingToggleReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
