import React from "react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Input, Avatar, Icon } from "antd";
import icon_Search from "./image/bx-search-alt.png";
import "./header-activities.scss";

function HeaderActivities() {
  const navigate = useNavigate();
  const handleAddEvent = () => {
    navigate("/add");
  };
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
        <Button
          className="btn-add-learning"
          type="default"
          onClick={handleAddEvent}
        >
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
