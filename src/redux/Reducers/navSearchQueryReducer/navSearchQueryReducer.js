const navSearchQueryReducer = (state = "", action) => {
  switch (action.type) {
    case "NAV_SEARCH_QUERY":
      return (state = action.payload.textSearchQueryValue);
    default:
      return state;
  }
};

export default navSearchQueryReducer;
