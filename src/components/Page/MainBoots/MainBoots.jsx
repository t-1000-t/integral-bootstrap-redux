import React, { Component } from "react";
import { connect } from "react-redux";
import mainBootsLoadingAction from "../../../redux/Actions/mainBootsLoadingAction";
import MainCard from "./MainCard";
import arrMainBootsAction from "../../../redux/Actions/arrMainBootsAction";
import arrSearchAction from "../../../redux/Actions/arrSearchAction";
// import useCountRenders from "../../services/useCountRenders";

class MainBoots extends Component {
  state = {
    count: 0,
    send: false
  };
  componentDidMount() {
    this.fetchHomeProducts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { isSearchQueryValue } = this.props;
    if (prevProps.isSearchQueryValue !== isSearchQueryValue) {
      this.setState({
        count: 0
      });
      this.fetchArrSearch();
    }
  }

  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };
  decrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  fetchHomeProducts() {
    const { mainBootsLoadingTrue, arrayMainBoots } = this.props;
    mainBootsLoadingTrue();
    try {
      return fetch(
        // `http://localhost:5000/api/main`
        `https://shop-integral.herokuapp.com/api/main`
        // `https://shop-bootstrap.herokuapp.com/api/main`
      )
        .then(res => res.json())
        .then(data => data.main)
        .then(arr => {
          arrayMainBoots(arr);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          const { mainBootsLoadingFalse } = this.props;
          mainBootsLoadingFalse();
        });
    } catch (err) {
      console.error(err);
    }
  }

  // fetch 2
  fetchArrSearch = async () => {
    const { isArraySP, mainBootsLoadingTrue, isSearchQueryValue } = this.props;
    console.log("TEXT :", isSearchQueryValue);
    mainBootsLoadingTrue();
    try {
      await fetch(
        `https://intshop.link/api/search/${isSearchQueryValue}`
        // `https://shop-integral.herokuapp.com/api/search/${isSearchQueryValue}`
        // `https://shop-bootstrap.herokuapp.com/api/search/${isSearchQueryValue}`
      )
        .then(res => res.json())
        .then(async data => await data.item)
        .then(arr => {
          console.log("ARR 2", arr);
          // console.log("ARR count", arr.length);
          if (!arr || arr === []) {
            return;
          }
          isArraySP(arr);
          if (arr.length === 0) {
            this.setState({
              send: true
            });
          } else {
            this.setState({
              send: false
            });
          }
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          const { mainBootsLoadingFalse } = this.props;
          mainBootsLoadingFalse();
        });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { count, send } = this.state;
    const { isLoadingSpinner, arrMain, isArray } = this.props;
    return (
      <main role="main">
        {isLoadingSpinner && (
          <div className="text-center">
            <div className="spinner-border m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {!isLoadingSpinner && (
          <div className="album py-5 bg-white">
            <div className="container">
              <div className="row">
                {send && <div>Товара в таким именем нет в базе!</div>}
                {isArray.length >= 1
                  ? isArray[count].map((elem, idx) => (
                      <MainCard key={idx} elem={elem}></MainCard>
                    ))
                  : arrMain.map((elem, idx) => (
                      <MainCard key={idx} elem={elem}></MainCard>
                    ))}
              </div>
            </div>
            <button
              disabled={!count}
              onClick={() => {
                this.decrement();
              }}
            >
              More items
            </button>
            <button
              disabled={count === isArray.length - 1}
              onClick={() => {
                this.increment();
              }}
            >
              More items
            </button>
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoadingSpinner: state.mainBootsloadingSpinner,
    arrMain: state.arrMaBo,
    isSearchQueryValue: state.textSearchQueryValue,
    isArray: state.arraySP
  };
};

const mapDispatchToProps = dispatch => {
  return {
    mainBootsLoadingFalse: () =>
      dispatch(mainBootsLoadingAction.mainBootsLoadingFalse()),
    mainBootsLoadingTrue: () =>
      dispatch(mainBootsLoadingAction.mainBootsLoadingTrue()),
    arrayMainBoots: val => dispatch(arrMainBootsAction.arrayMainBoots(val)),
    isArraySP: arr => dispatch(arrSearchAction.arrayAction(arr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBoots);
