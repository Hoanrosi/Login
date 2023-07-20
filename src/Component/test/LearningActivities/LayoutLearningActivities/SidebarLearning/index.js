import React from "react";
import { Checkbox } from "antd";
import icon_filter from "./image/bx-filter.png";
import "./sidebarLearning.scss";
import FilterForm from "./FilterForm";
import { dataType } from "./dataType";
import { dataDomain } from "./dataDomain";

function SidebarLearning() {
  return (
    <div className="wrapper-sidebarlearning">
      <div className="header-learning">
        <img src={icon_filter} className="icon-filter" />
        <div className="heading-learning">FILTER</div>
      </div>

      <FilterForm title="Type" options={dataType} />
      <FilterForm title="Domain" options={dataDomain} />
      <FilterForm title="Status" options={dataDomain} />
      <FilterForm title="Period time" options={dataDomain} />
    </div>
  );
}

export default SidebarLearning;
