const arrMainBootsReducer = (state = [], action) => {
  switch (action.type) {
    case "ARR_MAIN_BOOTS":
      return (state = action.payload.arrMaBo);
    default:
      return state;
  }
};

export default arrMainBootsReducer;
