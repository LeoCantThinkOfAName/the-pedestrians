import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

const DesktopWide = () => {
  return (
    <div className="single-post index-ad ad-desktop-wide">
      <h5 className="index-ad-title">
        <FormattedMessage id="advertisements" />
      </h5>
      <div className="index-ad-wrapper">
        <div
          className="custom-ad-placeholder"
          style={{ width: 970, height: 250 }}
        >
          <div className="custom-ad-message">
            You disabled It! QwQ
            <br />
            It&apos;s a cool AD, I&apos;m sure you will love it.
          </div>
          <div className="ad-placeholder" />
        </div>
      </div>
    </div>
  );
};

export default DesktopWide;
