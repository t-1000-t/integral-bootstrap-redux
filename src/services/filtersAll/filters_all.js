import routes from "../../routes";

const fetchFilter = async (category) => {
    try {
        return await fetch(
            `${routes.URL}/${routes.API_FILTERS_ALL}/${category}`
        )
            .then((res) => res.json())
            .then((data) => data)
            .catch()
            .finally();
    } catch (err) {
        console.log(err);
    }
};

export default fetchFilter;
