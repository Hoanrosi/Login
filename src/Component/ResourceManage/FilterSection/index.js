import React from "react";
import "./filter.scss";
import icon_arrow_down from "../image/arrow-chevron-down.png";
import icon_arrow_up from "../image/arrow-chevron-up.png";
function FilterSection(props) {
  const { title, isCollapse, handleClick, handelFilter, options } = props;
  return (
    <div className="sidebar-item">
      <div className="sidebar-item-heading">
        <div className="title">{title}</div>
        {isCollapse ? (
          <img
            src={icon_arrow_up}
            className="icon-arrow_up"
            onClick={handleClick}
          />
        ) : (
          <img
            src={icon_arrow_down}
            className="icon-arrow_down"
            onClick={handleClick}
          />
        )}
      </div>
      {!isCollapse && (
        <div>
          {options.map((value) => (
            <div className="filter-list">
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value={value}
                  onChange={handelFilter}
                />
                <div className="label">{value}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="sidebar-line"></div>
    </div>
  );
}

export default FilterSection;
