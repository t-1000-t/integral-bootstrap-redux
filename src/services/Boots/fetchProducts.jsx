import routes from "../../routes";

const fetchProducts = async (categoryNumber, pagenum) => {
  try {
    return await fetch(
      // `http://localhost:5000/api/products/${this.categoryNumber}/${pagenum}`
      `${routes.URL}/api/products/${categoryNumber}/${pagenum}`
    )
      .then(res => res.json())
      .catch()
      .finally();
  } catch (err) {
    console.log(err);
  }
};

export default fetchProducts;
