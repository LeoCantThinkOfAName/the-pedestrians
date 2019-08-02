import React from "react";

const Normal = () => {
  return (
    <div className="index-post index-ad">
      <h5 className="index-ad-title">Advertisements</h5>
      <div className="index-ad-wrapper">
        <div
          className="custom-ad-placeholder"
          style={{ width: 300, height: 250 }}
        >
          <div className="custom-ad-message">
            You disabled It! QwQ
            <br />
            It&apos;s a cool AD, I&apos;m sure you will love it.
          </div>
          <div className="ad-placeholder" />
        </div>
        <div
          className="custom-ad-placeholder"
          style={{ width: 300, height: 250 }}
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

export default Normal;
