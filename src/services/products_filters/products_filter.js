import routes from "../../routes";

const products_filter = async (note) => {
    const {category, filters} = note
    try {
        return await fetch(
            `${routes.URL}/${routes.API_PRODUCTS_FILTER}/${category}/${filters}`
            // `http://localhost:5000/api/products_filter/${category}/${filters}`
        )
            .then((res) => res.json())
            .then((data) => data)
            .catch()
            .finally();
    } catch (err) {
        console.log(err);
    }
};

export default products_filter;
