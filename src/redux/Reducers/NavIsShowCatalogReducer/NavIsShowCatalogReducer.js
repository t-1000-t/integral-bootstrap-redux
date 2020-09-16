const NavIsShowCatalogReducer = (state = false, action) => {
switch (action.type) {
    case "NAV_ACTION_SHOW_FALSE":
        return state = false;
    case "NAV_ACTION_SHOW_TOGGLE":
        return state = !state;
    default:
        return state;
}
};

export default NavIsShowCatalogReducer;