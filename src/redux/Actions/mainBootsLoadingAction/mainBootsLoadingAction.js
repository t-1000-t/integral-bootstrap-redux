const mainBootsLoadingFalse = () => {
return{
    type: "MAIN_BOOTS_LOADING_FALSE",
    payload: {
        mainBootsloadingSpinnerFalse: false,
    }
}
};

const mainBootsLoadingTrue = () => {
    return {
        type: "MAIN_BOOTS_LOADING_TRUE",
        payload: {
            mainBootsloadingSpinnerTrue: true,
        }
    }
};

export default {mainBootsLoadingFalse, mainBootsLoadingTrue};