const navSearchQueryReducer = (state = '', action) => {
    switch (action.type) {
        case "NAV_SEARCH_QUERY":
            return action.payload.textSearchQueryValue;
        default:
            return state;
    }
};

export default navSearchQueryReducer;