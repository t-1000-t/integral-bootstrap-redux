import routes from "../../routes";

const fetchProducts = async (categoryNumber, pageNum) => {
  try {
    return await fetch(
      // `http://localhost:5000/api/products/${this.categoryNumber}/${pagenum}`
      `${routes.URL}/${routes.API_PRODUCTS}/${categoryNumber}/${pageNum}`
    )
      .then(res => res.json())
      .catch()
      .finally();
  } catch (err) {
    console.log(err);
  }
};

export default fetchProducts;
