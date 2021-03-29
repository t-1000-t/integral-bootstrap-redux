const navIsShowReducer = (state = false, action) => {
  switch (action.type) {
    case "NAV_SHOW_TOGGLE":
      return !action.payload.navIS;
    default:
      return state;
  }
};

export default navIsShowReducer;
