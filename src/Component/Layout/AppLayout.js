import React from "react";
import data from "../data.json";
import "./app-layout.scss";

function AppLayout({ children, ...props }) {
  const { title,handleResourceManage } = props;
  console.log(title);
  return (
    <div className="app-layout">
      {/* Header */}
      <div className="header">
        <div className="item-left">
          <div className="logo font-playfair">MyEC</div>
          <ul className="navbar">
            <li className="navbar-item font-noto">
              <a> Dashboard</a>
            </li>
            <li className="navbar-item font-noto">
              <a  onClick={handleResourceManage}> Resource Management</a>
            </li>
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
