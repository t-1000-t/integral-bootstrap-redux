const NavIsShowFalse = () => {
    return {
        type: "NAV_ACTION_SHOW_FALSE",
        payload: {
            isNavShow: false,
        }
    }
};

const NavIsShowToggle = (value) => {
    return {
        type: "NAV_ACTION_SHOW_TOGGLE",
        payload: {
            isNavShow: !value,
        }
    }
};

export default {NavIsShowFalse, NavIsShowToggle};