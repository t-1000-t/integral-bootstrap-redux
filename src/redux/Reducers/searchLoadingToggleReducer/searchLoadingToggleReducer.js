const searchLoadingToggleReducer = (state = false, action) => {
  switch (action.type) {
    case "SEARCH_LOADING_TOGGLE":
      return (state = action.payload.searchLoadingToggle);
    default:
      return state;
  }
};

export default searchLoadingToggleReducer;
