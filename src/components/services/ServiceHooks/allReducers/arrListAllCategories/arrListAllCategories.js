export default function arrListAllCategories(state = [], action) {
    switch (action.type) {
        case "ARR_ALL_LIST_CATEGORY":
            return [...action.payload]
        default:
            return state
    }
}