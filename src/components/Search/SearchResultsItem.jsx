import React, { memo } from "react";

const SearchResultsItem = memo(({ title, snippet, link, pagemap }) => {
  return (
    <li>
      <a href={link}>
        {pagemap.cse_thumbnail && (
          <img
            src={pagemap.cse_thumbnail[0].src}
            alt={title}
            className="search-result-thumbnail"
          />
        )}
        <div>
          <h4>{title}</h4>
          <p>{snippet}</p>
        </div>
      </a>
    </li>
  );
});

export default SearchResultsItem;
