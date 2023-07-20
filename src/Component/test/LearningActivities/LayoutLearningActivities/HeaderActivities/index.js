import React from "react";
import { Button } from "antd";
import { Input, Avatar, Icon } from "antd";
import icon_Search from "../image/bx-search-alt.png";
import "./header-activities.scss";

function HeaderActivities() {
  function Suffix() {
    return (
      <div className="suffix-container">
        <img className="suffix-image" src={icon_Search} alt="Search" />
      </div>
    );
  }
  
  return (
    <div className="wrapper-header">
      <div className="header-learning-activitis">
        <div className="header-learning-name">Learning Activities List</div>
        <Button className="btn-add-learning" type="default">
          Add
        </Button>
      </div>
      <div className="input-wrapper">
        <Input
          placeholder="Search"
          suffix={<Suffix />}
          className="input-learning-activities"
        />
      </div>
    </div>
  );
}

export default HeaderActivities;
