const arrSearchReducer = (state = [], action) => {
  switch (action.type) {
    case "ARR_SEARCH":
      return (state = action.payload.arrSearch);
    default:
      return state;
  }
};

export default arrSearchReducer;
