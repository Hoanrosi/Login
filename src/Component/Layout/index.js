import React from "react";
import image from "../image/bg-login.jpg";
import "./styles.scss";

function Layout({children,...props}) {
  return (
    <div className="wrapper">
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Layout;
