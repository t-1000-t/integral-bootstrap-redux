const arrayMainBoots = (value) => {
  return {
      type: "ARR_MAIN_BOOTS",
      payload: {
          arrMaBo: [...value]
      }
  }
};

export default {arrayMainBoots};