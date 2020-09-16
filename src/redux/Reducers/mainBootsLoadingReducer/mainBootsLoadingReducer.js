const mainBootsLoadingReducerFalse = (state = false, action) => {
    switch (action.type) {
        case "MAIN_BOOTS_LOADING_FALSE":
            return state = action.payload.mainBootsloadingSpinnerFalse;
        case "MAIN_BOOTS_LOADING_TRUE":
            return state = action.payload.mainBootsloadingSpinnerTrue;
        default:
            return state;
    }
};

export default mainBootsLoadingReducerFalse;