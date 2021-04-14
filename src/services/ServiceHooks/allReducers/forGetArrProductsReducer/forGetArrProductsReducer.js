export default function forGetArrProductsAction(state = [], action) {
    switch (action.type) {
        case "GET_ARR_PRODUCTS":
            return [...action.payload.list];
        default:
            return state
    }
}