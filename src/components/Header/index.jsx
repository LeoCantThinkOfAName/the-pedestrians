import React from "react";
import moment from "moment";
import { Link, injectIntl, FormattedMessage } from "gatsby-plugin-intl";

// components
import Logo from "./Logo";
import LangMenu from "./LangMenu";
import Search from "../Search";

// styles
import "./Header.scss";

const Header = props => {
  const { date } = props;

  return (
    <>
      <LangMenu />
      <header className="header">
        <Link to="/">
          <Logo />
        </Link>
        <div className="title-container">
          <h1 className="title">
            <FormattedMessage id="subtitle" />
          </h1>
        </div>
        <div className="publish-strip">
          <div>
            {date
              ? moment(date).format("dddd, MMMM DD YYYY")
              : moment().format("dddd, MMMM DD YYYY")}
          </div>
          <Search />
        </div>
      </header>
    </>
  );
};

export default injectIntl(Header);
