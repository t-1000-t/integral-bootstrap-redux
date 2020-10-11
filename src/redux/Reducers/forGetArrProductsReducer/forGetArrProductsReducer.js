const forGetArrProductsAction = (state = [], action) => {
    switch (action.type) {
        case "GET_ARR_PRODUCTS":
            return state = [...action.payload.arrayProd];
        default:
            return state
    }
}

export default forGetArrProductsAction;