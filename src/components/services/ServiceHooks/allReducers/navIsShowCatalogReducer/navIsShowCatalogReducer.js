export default function navIsShowCatalogReducer(state = false, action) {
  switch (action.type) {
    case "NAV_SHOW_CATALOG_CLOSE":
      return action.payload.navISC = false
    case "NAV_SHOW_CATALOG_TOGGLE":
      return !action.payload.navISC
    default:
      return state
  }
};
