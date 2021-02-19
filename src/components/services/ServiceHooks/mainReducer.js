const mainReducer = (state, action) => {
    switch (action.type) {
        case "getMain":
            return [...action.payload.main]

        default:
            return state

    }
}

export default mainReducer