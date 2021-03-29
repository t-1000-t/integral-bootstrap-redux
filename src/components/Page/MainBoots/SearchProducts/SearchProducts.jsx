import React from "react";
import { connect } from "react-redux";
import useCountRenders from "../../../../services/useCountRenders";
// import useFetchSearch from "../../../services/useFetchSearch/useFetchSearch";
import MainCard from "../MainCard";
// import arrSearchAction from "../../../../redux/Actions/arrSearchAction";

// http://localhost:5000/api/search/:string

const SearchProducts = ({ loading, data }) => {
  useCountRenders();

  // const { state } = useFetchSearch(
  //   // "http://localhost:5000/api/search/DELL"
  //   `http://localhost:5000/api/search/${text}`
  // );
  // console.log("DATA!: ", typeof data);
  // console.log("DATA!: ", data);

  return (
    <main role="main">
      {loading && (
        <div className="text-center">
          <div className="spinner-border m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!loading && (
        <div className="album py-5 bg-white">
          <div className="container">
            <div className="row">
              {data === true ? (
                data.item.map((elem, idx) => (
                  <MainCard key={idx} id={idx} elem={elem}></MainCard>
                ))
              ) : (
                <div>CLEAR</div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.isLoadingSearch,
    data: state.arrSearchProducts
  };
};

export default connect(mapStateToProps)(SearchProducts);
