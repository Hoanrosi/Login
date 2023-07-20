import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import "./app-layout.scss";

function AppLayout({ children, ...props }) {
  const { title } = props;
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };
  console.log(title);
  return (
    <div className="app-layout">
      {/* Header */}
      <div className="header">
        <div className="item-left">
          <div className="logo font-playfair">MyEC</div>
          <ul className="navbar">
            <li>
              <Link to="/dashboard" className={`navbar-item font-noto`}>
                Dashboard
              </Link>
            </li>
            <li className={`navbar-item  font-noto ${isActive ? "active" : ""}`}>
              <Link  className="item-link" to="/resource-manager" onClick={handleActive}>
                Resource Management
              </Link>
            </li>
            <li className={`navbar-item  font-noto ${isActive ? "active" : ""}`}>
              <Link  className="item-link" to="/learning-activities" onClick={handleActive}>
              Learning Activities
              </Link>
            </li>
            {/* <li className="navbar-item font-noto">
              <a> Learning Activities</a>
            </li> */}
          </ul>
        </div>

        <div className="info">
          <div className="info-user">
            <img src={data.image} className="img-avatar" />
            <div className="name-avatar">{data.name}</div>
          </div>
          <div className="logout">Logout</div>
        </div>
      </div>

      {/* Container */}

      <div className="container-applayout">
        <div className="title-applayout">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AppLayout;
