const navSearchQuery = (value) => {
    return {
        type: "NAV_SEARCH_QUERY",
        payload: {
            textSearchQueryValue: value,
        }
    }
};

export default {navSearchQuery};