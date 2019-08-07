import React from "react";
import moment from "moment";
import { Link } from "gatsby";

// components
import Logo from "./Logo";
import LangMenu from "./LangMenu";
import Search from "../Search";

// styles
import "./Header.scss";

const Header = () => {
  return (
    <>
      <LangMenu />
      <header className="header">
        <Link to="/">
          <Logo />
        </Link>
        <div className="title-container">
          <h1 className="title">subtitle</h1>
        </div>
        <div className="publish-strip">
          <div>{moment().format("dddd, MMMM DD YYYY")}</div>
          <Search />
        </div>
      </header>
    </>
  );
};

export default Header;
