import React, { Component } from "react";
import { Link } from "gatsby";
import "./PostSuggestions.scss";

export default class PostSuggestions extends Component {
  render() {
    const { prevSlug, prevTitle, nextSlug, nextTitle, lang } = this.props;

    return (
      <div className="post-suggestions md-grid md-cell--12">
        {nextSlug ? (
          <Link
            to={`/${lang}${nextSlug}`}
            className="post-suggestion next-suggestion"
          >
            <div className="headline-container hide-on-mobile">
              <p>Next Issue</p>
              <h5>{nextTitle}</h5>
            </div>
          </Link>
        ) : (
          <div className="empty-link-placeholder next-empty" />
        )}
        {prevSlug ? (
          <Link
            to={`/${lang}${prevSlug}`}
            className="post-suggestion prev-suggestion"
          >
            <div className="headline-container">
              <p>Prev Issue</p>
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
