const showAboutUs = (value) => {
    return {
        type: "DROP_DOWN_ABOUT_US",
        payload: {
            isShowAboutUs: !value,
        }
    }
};

export default {showAboutUs};