export const navIsShowFalse = () => {
    return {
        type: "NAV_ACTION_SHOW_FALSE",
        payload: {
            isNavShow: false,
        }
    }
};

export const navIsShowToggle = (value) => {
    value.preventDefault();
    return {
        type: "NAV_ACTION_SHOW_TOGGLE",
        payload: {
            isNavShow: !value,
        }
    }
};

export default {navIsShowFalse, navIsShowToggle};