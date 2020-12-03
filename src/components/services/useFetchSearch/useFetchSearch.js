import { useState, useEffect, useRef } from "react";

const useFetchSearch = url => {
  const [state, setState] = useState({
    data: null,
    count: 0,
    stringItem: "",
    loading: true
  });

  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));

    fetch(url)
      .then(async x => await x.json())
      .then(n => {
        console.log("CURRENT", isCurrent.current);
        console.log("n", n);
        if (isCurrent.current) {
          setState({
            data: n.item,
            count: n.count,
            stringItem: n.stringItem,
            loading: false
          });
        }
      });
  }, [url]);

  return state;
};

export default useFetchSearch;
