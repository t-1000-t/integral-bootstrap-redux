import React, {Component} from 'react';
import closeDropdown from "../../../middleware/closeDropdown";
import CardProduct from "./CardProduct";
import fetchProducts from "../../../services/Boots/fetchProducrs/fetchProducts";
import viewCategoryProductsAction from "../../../../redux/Actions/viewCategoryProductsAction";
import forGetArrProductsAction from "../../../../redux/Actions/forGetArrProductsAction";
import {connect} from "react-redux";

class ViewCategoryProducts extends Component {

    state = {
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
        const {isLoading, toggleIsLoading, getArrProducts} = this.props
        const {currentPage} = this.state;
        const categoryNumber = this.props.match.params.categorynum;
        toggleIsLoading(isLoading);
        try {
            fetchProducts(categoryNumber, currentPage)
                .then((data) => {
                    console.log("data.newArr", data.newArr);
                    getArrProducts(data.newArr);
                    this.setState(({
                        count: data.count,
                    }));
                })
                .catch((error) => {
                    this.setState({
                        error,
                    });
                })
                .finally(() => {
                    toggleIsLoading(isLoading);
                });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const {isLoading, products} = this.props;
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
                        {products.length > 0 && products.map(elem => (
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

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoadingVCP,
        products: state.arrProducts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleIsLoading: (boolean) => dispatch(viewCategoryProductsAction.viewCatProdIsLoadingToggle(boolean)),
        getArrProducts: (arr) => dispatch(forGetArrProductsAction.getArrProducts(arr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategoryProducts);

