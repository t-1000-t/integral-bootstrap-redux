const arrSearchReducer = (state = [], action) => {
  switch (action.type) {
    case "ARR_SEARCH":
      return [...action.payload.isArraySP];
    default:
      return state;
  }
};

export default arrSearchReducer;
