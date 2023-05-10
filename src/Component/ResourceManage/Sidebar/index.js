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
  const [isCollapseDepartment, setIsCollapseDepartment] = useState(true);
  const [isCollapseDomain, setIsCollapseDomain] = useState(true);
  const [isCollapseSkill, setIsCollapseSkill] = useState(true);
  const [isCollapseLevel, setIsCollapseLevel] = useState(true);
  const [isCollapseStatus, setIsCollapseStatus] = useState(true);
  const handleClickDepartment = () => {
    setIsCollapseDepartment(!isCollapseDepartment);
  };
  const handleClickDomain = () => {
    setIsCollapseDomain(!isCollapseDomain);
  };
  const handleClickSkill = () => {
    setIsCollapseSkill(!isCollapseSkill);
  };
  const handleClickLevel = () => {
    setIsCollapseLevel(!isCollapseLevel);
  };
  const handleClickStatus = () => {
    setIsCollapseStatus(!isCollapseStatus);
  };
  return (
    <div className="resource-sidebar">
      <div className="sidebar-heading">
        <img src={icon_filter} className="icon-filter" />
        <div className="heading">FILTER</div>
      </div>
      <FilterSection
        title="Department"
        isCollapse={isCollapseDepartment}
        handleClick={handleClickDepartment}
        options={dataDepartment}
        handelFilter={handelFilterDepartment}
      />
      <FilterSection
        title="Domain"
        isCollapse={isCollapseDomain}
        handleClick={handleClickDomain}
        options={dataDomain}
        handelFilter={handelFilterDomain}
      />
      <FilterSection
        title="Skill"
        isCollapse={isCollapseSkill}
        handleClick={handleClickSkill}
        options={dataSkill}
        handelFilter={handleFilterSkill}
      />
      <FilterSection
        title="Level"
        isCollapse={isCollapseLevel}
        handleClick={handleClickLevel}
        options={dataLevel}
        handelFilter={handleFilterLevel}
      />
      <FilterSection
        title="Status"
        isCollapse={isCollapseStatus}
        handleClick={handleClickStatus}
        options={dataStatus}
        handelFilter={handleFilterStatus}
      />
    </div>
  );
}

export default Sidebar;
