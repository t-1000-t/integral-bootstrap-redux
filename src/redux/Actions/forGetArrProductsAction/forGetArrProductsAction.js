const getArrProducts = (value) => {
    return {
        type: "GET_ARR_PRODUCTS",
        payload: {
            arrayProd: value
        }
    }
}

export default {getArrProducts};