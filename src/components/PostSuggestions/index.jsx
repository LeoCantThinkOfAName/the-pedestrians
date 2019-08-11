import React, { Component } from "react";
import { Link, injectIntl } from "gatsby-plugin-intl";
import "./PostSuggestions.scss";

class PostSuggestions extends Component {
  render() {
    const { prevSlug, prevTitle, nextSlug, nextTitle, intl } = this.props;

    return (
      <div className="post-suggestions md-grid md-cell--12">
        {nextSlug ? (
          <Link to={nextSlug} className="post-suggestion next-suggestion">
            <div className="headline-container hide-on-mobile">
              <p>{intl.formatMessage({ id: "next-issue" })}</p>
              <h5>{nextTitle}</h5>
            </div>
          </Link>
        ) : (
          <div className="empty-link-placeholder next-empty" />
        )}
        {prevSlug ? (
          <Link to={prevSlug} className="post-suggestion prev-suggestion">
            <div className="headline-container">
              <p>{intl.formatMessage({ id: "prev-issue" })}</p>
              <h5>{prevTitle}</h5>
            </div>
          </Link>
        ) : (
          <div className="empty-link-placeholder prev-empty" />
        )}
      </div>
    );
  }
}

export default injectIntl(PostSuggestions);
