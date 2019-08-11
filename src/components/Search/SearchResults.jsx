import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

// components
import SearchResultsItem from "./SearchResultsItem";
import SearchPagination from "./SearchPagination";

const SearchResults = ({ state, dispatch }) => {
  const closeModal = () => {
    dispatch({
      type: "display",
    });
  };

  return (
    <div className="search-modal">
      <h3 className="search-modal-title">Archive of "{state.term}"</h3>
      <button
        className="btn close-btn"
        type="button"
        onClick={() => closeModal()}
      >
        <FormattedMessage id="close-modal" />
      </button>
      <div className="search-modal-frame">
        <div className="search-results-warpper">
          <ol className="search-results">
            {state.list.map(item => (
              <SearchResultsItem key={item.cacheId} {...item} />
            ))}
          </ol>
          {state.results.data &&
            parseInt(state.results.data.queries.request[0].totalResults) !==
              state.list.length && (
              <SearchPagination dispatch={dispatch} state={state} />
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
