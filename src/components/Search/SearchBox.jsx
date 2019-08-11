import React, { useState, memo } from "react";
import { injectIntl } from "gatsby-plugin-intl";

// component
import Icon from "./icon";

// helper function
import CustomSearch from "./SearchHelper";

const SearchBox = memo(({ dispatch, intl }) => {
  const [term, setTerm] = useState("");

  const search = async event => {
    event.preventDefault();

    if (term === "") {
      return;
    }

    await dispatch({
      type: "display",
      payload: true,
    });

    try {
      const results = await CustomSearch(term, 1);
      await dispatch({
        type: "initSearch",
        payload: {
          term,
          results,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="searchbox-wrapper">
      <form onSubmit={e => search(e)} className="searchbox-form">
        <label className="search-label" htmlFor="search-input">
          <Icon />
          <input
            id="search-input"
            type="text"
            placeholder={intl.formatMessage({ id: "type-to-search" })}
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="searchbox-input"
          />
          <div
            className={`searchbox-underline ${
              !term ? "searchbox-underline-warn" : null
            }`}
          />
        </label>
      </form>
    </div>
  );
});

export default injectIntl(SearchBox);
