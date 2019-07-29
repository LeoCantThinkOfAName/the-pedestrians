import React, { useEffect, useState, useRef } from "react";
import "./Advert.scss";

// components
import Normal from "./Normal";
import DesktopWide from "./DesktopWide";
import MobileWide from "./MobileWide";
import TabletWide from "./TabletWide";

const Advertisements = () => {
  const [size, setSize] = useState(0);
  const inter = useRef(undefined);

  const detectSize = width => {
    setSize(width);
  };

  const resizing = () => {
    clearTimeout(inter.current);

    inter.current = setTimeout(() => {
      setSize(window.innerWidth);
    }, 500);
  };

  const displayBottomAd = () => {
    if (size > 990) {
      return <DesktopWide />;
    }
    if (size > 500 && size < 990) {
      return <TabletWide />;
    }
    return <MobileWide />;
  };

  useEffect(() => {
    const windowWidth = window.innerWidth;
    detectSize(windowWidth);

    window.addEventListener("resize", resizing, false);

    return () => {
      window.removeEventListener("resize", resizing);
    };
  });

  return (
    <>
      <Normal />
      {displayBottomAd()}
    </>
  );
};

export default Advertisements;
