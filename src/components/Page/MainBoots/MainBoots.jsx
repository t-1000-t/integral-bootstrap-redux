import React, {Component} from "react";
import {connect} from "react-redux";
import mainBootsLoadingAction from "../../../redux/Actions/mainBootsLoadingAction";
import MainCard from "./MainCard";
import arrMainBootsAction from "../../../redux/Actions/arrMainBootsAction";


class MainBoots extends Component {

    componentDidMount() {
        this.fetchHomeProducts();
    }

    fetchHomeProducts() {
        const {mainBootsLoadingTrue, arrayMainBoots} = this.props;
        mainBootsLoadingTrue();
        try {
            return fetch(
                // `http://localhost:5000/api/main`
                `https://shop-integral.herokuapp.com/api/main`
            )
                .then((res) => res.json())
                .then((data) => data.main)
                .then((arr) => {
                    arrayMainBoots(arr);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    const {mainBootsLoadingFalse} = this.props;
                    mainBootsLoadingFalse();
                })
        } catch (err) {
            console.error(err);
        }
    }


    render() {
        const {isLoadingSpinner, arrMain} = this.props;
        return (
            <main role="main">
                {isLoadingSpinner &&
                <div className="text-center">
                    <div className="spinner-border m-5" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}
                {!isLoadingSpinner && <div className="album py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            {arrMain.length > 0 && arrMain.map(elem => (
                                <MainCard key={elem.productID} elem={elem}></MainCard>
                            ))}
                        </div>
                    </div>
                </div>}
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoadingSpinner: state.mainBootsloadingSpinner,
        arrMain: state.arrMaBo,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        mainBootsLoadingFalse: () => dispatch(mainBootsLoadingAction.mainBootsLoadingFalse()),
        mainBootsLoadingTrue: () => dispatch(mainBootsLoadingAction.mainBootsLoadingTrue()),
        arrayMainBoots: (val) => dispatch(arrMainBootsAction.arrayMainBoots(val))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBoots);