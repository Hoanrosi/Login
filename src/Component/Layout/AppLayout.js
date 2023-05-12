import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import "./app-layout.scss";

function AppLayout({ children, ...props }) {
  const { title, handleResourceManage } = props;
  console.log(title);
  return (
    <div className="app-layout">
      {/* Header */}
      <div className="header">
        <div className="item-left">
          <div className="logo font-playfair">MyEC</div>
          <ul className="navbar">
            <Link to="/dashboard" className="navbar-item font-noto">
              Dashboard
            </Link>
            <Link to="/resource-manager" className="navbar-item font-noto">
              Resource Management
            </Link>
            <li className="navbar-item font-noto">
              <a> Learning Activities</a>
            </li>
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
        <div className="title font-noto">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AppLayout;
