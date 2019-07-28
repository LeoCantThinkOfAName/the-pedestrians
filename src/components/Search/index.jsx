import React, { useReducer, memo } from "react";

// components
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

// style
import "./search.scss";

const initialState = {
  term: "",
  results: {},
  list: [],
  display: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "setTerm":
      return { list: [], results: {}, term: payload };
    case "setList":
      return { ...state, list: [...state.list, ...payload] };
    case "setResults":
      return { ...state, results: payload };
    case "initSearch":
      return {
        term: payload.term,
        results: payload.results,
        list: payload.results.data.items,
      };
    case "display":
      return {
        ...state,
        display: payload || !state.display,
      };
    default:
      return { state };
  }
};

const Search = memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchProps = {
    state,
    dispatch,
  };

  return (
    <div className="custom-search">
      <SearchBox {...searchProps} />
      {state.display && <SearchResults {...searchProps} />}
    </div>
  );
});

export default Search;
