const arrayAction = value => {
  return {
    type: "ARR_SEARCH",
    payload: {
      arrSearch: [...value]
    }
  };
};

export default { arrayAction };
