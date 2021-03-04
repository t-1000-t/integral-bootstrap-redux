const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'addItems':
            return [...action.payload.item]

        default:
            return state
    }
}

export default itemsReducer