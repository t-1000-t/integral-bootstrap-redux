const dropDownAboutUsReducer = (state = false, action) => {
    switch (action.type) {
        case "DROP_DOWN_ABOUT_US":
            return !state;
        default:
            return state;
    }
};

export default dropDownAboutUsReducer;