import React, {Component} from 'react';
import closeDropdown from "../../../middleware/closeDropdown";
import CardProduct from "./CardProduct";
import fetchProducts from "../../../services/Boots/fetchProducrs/fetchProducts";

class ViewCategoryProducts extends Component {

    state = {
        isLoading: false,
        arrProducts: [],
        currentPage: 0,
        count: 0,
        isLoadingMoreProducts: false,
    };

    componentDidMount() {
        closeDropdown();
        this.fetchArrProducts();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if (prevProps.location !== this.props.location) {
           this.fetchArrProducts();
       }
    }




    // --- keep all products --- //
    fetchArrProducts() {
        const categoryNumber = this.props.match.params.categorynum;
        const {currentPage} = this.state;
        this.setState({isLoading: true});
        try {
            fetchProducts(categoryNumber, currentPage)
                .then((data) => {
                    this.setState(({
                        count: data.count,
                        arrProducts: [...data.newArr],
                    }));
                })
                .catch((error) => {
                    this.setState({
                        error,
                    });
                })
                .finally(() => {
                    this.setState({isLoading: false, isLoadingMoreProducts: false});
                });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const {isLoading, arrProducts} = this.state;
        return (
            <>
                {isLoading &&
                <div className="text-center">
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 mt-3">
                        {arrProducts.length > 0 && arrProducts.map(elem => (
                            <div key={elem.productID} className="col mb-4">
                                <CardProduct elem={elem} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default ViewCategoryProducts;