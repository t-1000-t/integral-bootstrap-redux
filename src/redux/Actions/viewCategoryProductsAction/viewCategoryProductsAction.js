const viewCatProdIsLoadingToggle = (value) => {
    return {
        type: "VIEW_CAT_PROD_IS_LOADING_TOGGLE",
        payload: {
            isLoadingViewProd: value
        }
    }
}


export default {viewCatProdIsLoadingToggle};