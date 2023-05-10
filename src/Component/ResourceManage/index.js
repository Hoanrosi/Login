import React, { useState, useEffect } from "react";
import "./resourcemanage.scss";
import icon_arrow_back_back from "../image/arrow-chevron-back back.png";
import icon_arrow_back from "../image/arrow-chevron-back.png";
import icon_arrow_forward from "../image/arrow-chevron-forward.png";
import icon_arrow_forward_forward from "../image/arrow-chevron- forward forward.png";
import Sidebar from "./Sidebar";
import Table from "./Table";
import Header from "./Table/Header";
import ContentTable from "./Table/Content-table";
import Pagination from "./Table/Pagination";

import { dataLevel } from "./dataLevel";
import { dataList } from "./data";
function ResourceManage() {
  const [filterDataDepartment, setFilterDataDepartment] = useState([]);
  const [filterDataDomain, setFilterDataDomain] = useState([]);
  const [filterDataLevel, setFilterDataLevel] = useState([]);
  const [filterDataSkill, setFilterDataSkill] = useState([]);
  const [filterDataStatus, setFilterDataStatus] = useState([]);
  const [listData, setListData] = useState(dataList);
  const [listDataFilter, setListDataFilter] = useState([]);

  // handleFliterDepartment
  const handelFilterDepartment = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(isChecked);

    if (isChecked) {
      setFilterDataDepartment([...filterDataDepartment, value]);
    } else {
      const filterList = filterDataDepartment.filter((item) => item != value);
      setFilterDataDepartment(filterList);
    }
  };

  // handleFilterDomain
  const handelFilterDomain = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(isChecked);

    if (isChecked) {
      setFilterDataDomain([...filterDataDomain, value]);
    } else {
      const filterList = filterDataDomain.filter((item) => item != value);
      setFilterDataDomain(filterList);
    }
  };

  // handleFilterSkill
  const handleFilterSkill = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilterDataSkill([...filterDataSkill, value]);
    } else {
      const filterList = filterDataSkill.filter((item) => item != value);
      setFilterDataSkill(filterList);
    }
  };
  // handleFilterLevel

  const handleFilterLevel = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilterDataLevel([...filterDataLevel, value]);
    } else {
      const filterList = filterDataLevel.filter((item) => item != value);
      setFilterDataLevel(filterList);
    }
  };

  // handleFilterStatus
  const handleFilterStatus = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setFilterDataStatus([...filterDataStatus, value]);
    } else {
      const filterList = filterDataStatus.filter((item) => item != value);
      setFilterDataStatus(filterList);
    }
  };
  useEffect(() => {
    if (
      filterDataDepartment.length > 0 ||
      filterDataDomain.length > 0 ||
      filterDataSkill.length > 0 ||
      filterDataLevel.length > 0 ||
      filterDataStatus.length > 0
    ) {
      const listDataNew = dataList.filter((itemData) => {
        if (
          filterDataDepartment.length > 0 &&
          !filterDataDepartment.includes(itemData.department)
        ) {
          return false;
        }
        if (
          filterDataDomain.length > 0 &&
          !filterDataDomain.includes(itemData.domain)
        ) {
          return false;
        }
        if (
          filterDataSkill.length > 0 &&
          !filterDataSkill.includes(itemData.skill1 && itemData.skill2)
        ) {
          return false;
        }

        if (
          filterDataLevel.length > 0 &&
          !filterDataLevel.includes(itemData.level1 && itemData.level2)
        ) {
          return false;
        }

        if (
          filterDataStatus.length > 0 &&
          !filterDataStatus.includes(itemData.Work_status)
        ) {
          return false;
        }

        return true;
      });
      setListDataFilter(listDataNew);
    } else {
      setListDataFilter(listData);
    }
  }, [
    filterDataDepartment,
    filterDataDomain,
    filterDataSkill,
    filterDataLevel,
    filterDataStatus,
  ]);
  return (
    <div className="resource-wrapper">
      {/* Sidebar */}

      <Sidebar
        handelFilterDepartment={handelFilterDepartment}
        handelFilterDomain={handelFilterDomain}
        handleFilterSkill={handleFilterSkill}
        handleFilterLevel ={handleFilterLevel }
        handleFilterStatus={handleFilterStatus}
      />

      {/* Content */}
      <Table listDataFilter={listDataFilter} dataLevel={dataLevel} />
    </div>
  );
}

export default ResourceManage;
