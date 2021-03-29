const navSearchQueryReducer = (state = "", action) => {
  switch (action.type) {
    case "textSearchWord":
      return state = action.payload.text
    default:
      return state;
  }
};

export default navSearchQueryReducer;
