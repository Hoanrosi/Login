import React, { useState } from "react";
import icon_filter from "../image/bx-filter.png";
import FilterSection from "../FilterSection";
import { dataDepartment } from "../dataDepartment";
import { dataDomain } from "../dataDomian";
import { dataSkill } from "../dataSkill";
import { dataLevel } from "../dataFilterLevel";
import { dataStatus } from "../dataStatus";
import "./sidebar.scss";

function Sidebar(props) {
  const {
    handelFilterDepartment,
    handelFilterDomain,
    handleFilterSkill,
    handleFilterLevel,
    handleFilterStatus,
  } = props;

  return (
    <div className="resource-sidebar">
      <div className="sidebar-heading">
        <img src={icon_filter} className="icon-filter" />
        <div className="heading">FILTER</div>
      </div>
      <FilterSection
        title="Department"
        options={dataDepartment}
        handelFilter={handelFilterDepartment}
      />
      <FilterSection
        title="Domain"
        options={dataDomain}
        handelFilter={handelFilterDomain}
      />
      <FilterSection
        title="Skill"
        options={dataSkill}
        handelFilter={handleFilterSkill}
      />
      <FilterSection
        title="Level"
        options={dataLevel}
        handelFilter={handleFilterLevel}
      />
      <FilterSection
        title="Status"
        options={dataStatus}
        handelFilter={handleFilterStatus}
      />
    </div>
  );
}

export default Sidebar;
