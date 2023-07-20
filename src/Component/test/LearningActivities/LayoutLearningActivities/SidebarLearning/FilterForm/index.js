import React, { useState } from "react";
import { Checkbox } from "antd";
import "./filter.scss";
import icon_arrow_down from "../image/arrow-chevron-down.png"
import icon_arrow_up from "../image/arrow-chevron-up.png";

function FilterForm(props) {
  const { title, options, handleFilterCliclk } = props;

  const [isCollapse, setIsCollapse] = useState(true);
  const handleClick = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <div className="sidebar-item-learning">
      <div className="sidebar-item-learning-heading">
        <div className="sidebar-item-learing-des">{title}</div>
        {isCollapse ? (
          <img
            src={icon_arrow_up}
            className="icon-learning-arrow-up"
            onClick={handleClick}
          />
        ) : (
          <img
            src={icon_arrow_down}
            className="icon-learning-arrow-down"
            onClick={handleClick}
          />
        )}
      </div>
      {!isCollapse && (
        <div>
          {options.map((option) => (
            <div className="filter-list-learning">
              <Checkbox>{option}</Checkbox>
            </div>
          ))}
        </div>
      )}
      <div className = "sidebar-learning-line"></div>
    </div>
  );
}

export default FilterForm;
