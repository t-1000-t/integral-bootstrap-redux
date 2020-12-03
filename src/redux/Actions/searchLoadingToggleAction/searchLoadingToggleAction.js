const searchLoadingToggleAction = value => {
  return {
    type: "SEARCH_LOADING_TOGGLE",
    payload: {
      searchLoadingToggle: !value
    }
  };
};

export default { searchLoadingToggleAction };
