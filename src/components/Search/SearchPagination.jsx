import React, { memo, useState } from "react";

// healper function
import CustomSearch from "./SearchHelper";

const SearchPagination = memo(({ state, dispatch }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async event => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const {
        searchTerms,
        startIndex,
      } = state.results.data.queries.nextPage[0];
      setLoading(true);
      const results = await CustomSearch(searchTerms, startIndex);
      await dispatch({
        type: "setResults",
        payload: results,
      });
      await dispatch({
        type: "setList",
        payload: results.data.items,
      });
      await setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="search-pagination">
      <button
        type="button"
        className="btn pagination-btn"
        onClick={e => handleClick(e)}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
});

export default SearchPagination;
