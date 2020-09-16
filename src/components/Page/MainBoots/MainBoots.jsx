import React, {Component} from "react";
import MainCard from "./MainCard";



class MainBoots extends Component {

    state = {
        arrMain: [],
        isLoading: false
    };

    componentDidMount() {
        this.fetchHomeProducts();
    }

    fetchHomeProducts() {
        this.setState({isLoading: true});
        try {
            return fetch(
                // `http://localhost:5000/api/main`
                `https://shop-integral.herokuapp.com/api/main`
            )
                .then((res) => res.json())
                .then((data) => data.main)
                .then((arr) => {
                    this.setState((state) => ({
                        arrMain: [...state.arrMain, ...arr]
                    }));
                })
                .catch((error) => {
                    this.setState({error});
                })
                .finally(() => {
                    this.setState(
                        {isLoading: false}
                    );
                });
        } catch (err) {
            console.error(err);
        }
    }


    render() {
        const {isLoading, arrMain} = this.state;
        return (
            <main role="main">
                {isLoading &&
                    <div className="text-center">
                        <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
                <div className="album py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            {arrMain.length > 0 && arrMain.map(elem => (
                                <MainCard key={elem.productID} elem={elem}></MainCard>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainBoots;