import React from "react";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "shit",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/",
    },
    {
      divider: true,
    },
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: "",
        component: "a",
        href: link.url,
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "About",
    leftIcon: "",
    component: Link,
    to: "/about/",
  });
  return NavList;
}
export default GetNavList;
