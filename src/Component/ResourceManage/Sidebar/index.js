import React, { useState, useEffect } from "react";
import axios from "axios";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://192.168.3.114:9001/api/v1/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        var data = res.data.result;
        console.log(data, 10000);
      } catch {
        console.log("error");
      }
    };
    fetchData();
  }, []);

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
