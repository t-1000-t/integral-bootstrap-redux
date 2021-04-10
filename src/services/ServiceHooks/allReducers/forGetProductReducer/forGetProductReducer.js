export default function forGetProductReducer(state = {}, action) {
    switch (action.type) {
        case "getProduct":
            return {...action.payload.data}
        default:
           return state
    }
}
