import React from "react";
import { Link } from "gatsby";

const LangMenu = () => {
  return (
    <div className="lang-selector">
      <ul>
        <li>
          <Link to="/en">En</Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/zh-TW">中文</Link>
        </li>
      </ul>
    </div>
  );
};

export default LangMenu;
