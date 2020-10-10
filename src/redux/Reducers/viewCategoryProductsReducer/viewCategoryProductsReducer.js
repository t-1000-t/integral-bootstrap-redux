const viewCategoryProductsReducer = (state = false, action) => {
    switch (action.type) {
        case "VIEW_CAT_PROD_IS_LOADING_TOGGLE":
            return !state;
        default:
            return state;
    }
}

export default viewCategoryProductsReducer;