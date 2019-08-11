import React, { Component } from "react";
import { Link, FormattedMessage } from "gatsby-plugin-intl";
import "./UserInfo.scss";

class UserInfo extends Component {
  render() {
    const {
      config: { userAvatar, userName },
    } = this.props;

    return (
      <div className="author-info">
        <img src={userAvatar} alt={userName} className="author-image" />
        <div>
          <p className="author-name">{userName}</p>
          <p className="author-description">
            一個日常可見的無聊工程師，因為無聊的關係，決定寫一些無聊的東西，來荼毒其他無聊的百姓。
            <br />
            喜歡的東西很多，但是沒一個負擔的起；感興趣的東西也很多，但是沒幾個做得出成績。
            <br />
            總而言之就是個凡人。
          </p>
          <Link to="/about">
            <FormattedMessage id="go-to-about" />
          </Link>
        </div>
      </div>
    );
  }
}

export default UserInfo;
