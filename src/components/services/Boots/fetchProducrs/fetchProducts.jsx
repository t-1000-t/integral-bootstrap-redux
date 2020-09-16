const fetchProducts = async (categoryNumber, pagenum) => {
    console.log(categoryNumber, pagenum);
    try {
        return await fetch(
            // `http://localhost:5000/api/products/${this.categoryNumber}/${pagenum}`
            `https://shop-integral.herokuapp.com/api/products/${categoryNumber}/${pagenum}`
        ).then((res) => res.json())
            .catch()
            .finally();
    } catch (err) {
        console.log(err);
    }
};

export default fetchProducts;