import React, { useState, useEffect } from "react";
import "./resourcemanage.scss";
import icon_filter from "../image/bx-filter.png";
import icon_arrow_down from "../image/Arrow Chevron Down.png";
import icon_arrow_up from "../image/arrow-chevron-up.png";
import icon_search from "../image/bx-search-alt.png";
import icon_sort_alt from "../image/bx-sort-alt-2.png";
import image_user from "../image/image-user.jpg";
import icon_arrow_back_back from "../image/arrow-chevron-back back.png";
import icon_arrow_back from "../image/arrow-chevron-back.png";
import icon_arrow_forward from "../image/arrow-chevron-forward.png";
import icon_arrow_forward_forward from "../image/arrow-chevron- forward forward.png";

import { dataLevel } from "./dataLevel";
import { dataList } from "./data";
function ResourceManage() {
  const [isDepartmentUpArrow, setIsDepartmentUpArrow] = useState(true);
  const [isDomainUpArrow, setIsDomainUpArrow] = useState(true);
  const [isSkillUpArrow, setSkillUpArrow] = useState(true);
  const [isLevelUpArrow, setIsLevelUpArrow] = useState(true);
  const [isWorkStatusArrow, setIsWorkStatusUpArrow] = useState(true);
  const [filterDataDepartment, setFilterDataDepartment] = useState([]);
  const [filterDataDomain, setFilterDataDomain] = useState([]);
  const [filterDataLevel, setFilterDataLevel] = useState([]);
  const [filterDataSkill, setFilterDataSkill] = useState([]);
  const [filterDataStatus, setFilterDataStatus] = useState([]);
  const [listData, setListData] = useState(dataList);
  const [listDataFilter, setListDataFilter] = useState([]);

  const handleDepartmentClick = () => {
    setIsDepartmentUpArrow(!isDepartmentUpArrow);
  };

  const handleDomainClick = () => {
    setIsDomainUpArrow(!isDomainUpArrow);
  };
  const handleSkillClick = () => {
    setSkillUpArrow(!isSkillUpArrow);
  };
  const handleLevelClick = () => {
    setIsLevelUpArrow(!isLevelUpArrow);
  };
  const handleWorkStatusClick = () => {
    setIsWorkStatusUpArrow(!isWorkStatusArrow);
  };

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

  useEffect(() => {
    if (
      filterDataDepartment.length > 0 ||
      filterDataDomain.length > 0 ||
      filterDataSkill.length > 0 ||
      filterDataLevel.length > 0
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
          !filterDataSkill.includes(itemData.skill1 || itemData.skill2)
        ) {
          return false;
        }

        if (
          filterDataLevel.length > 0 &&
          !filterDataLevel.includes(itemData.level1 || itemData.level2)
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
  ]);
  return (
    <div className="resource-wrapper">
      {/* Sidebar */}
      <div className="resource-sidebar">
        <div className="sidebar-heading">
          <img src={icon_filter} className="icon-filter" />
          <div className="heading">FILTER</div>
        </div>
        {/* Department */}
        <div className="sidebar-department">
          <div className="department-heading">
            <div className="heading">Department</div>
            {isDepartmentUpArrow ? (
              <img
                src={icon_arrow_up}
                className="icon-arrow_up"
                onClick={handleDepartmentClick}
              />
            ) : (
              <img
                src={icon_arrow_down}
                className="icon-arrow_down"
                onClick={handleDepartmentClick}
              />
            )}
          </div>
          {!isDepartmentUpArrow && (
            <div className="filter-list">
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="DU10"
                  onChange={handelFilterDepartment}
                />
                <div className="label">DU10</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="DU12"
                  onChange={handelFilterDepartment}
                />
                <div className="label">DU12</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="JForce"
                  onChange={handelFilterDepartment}
                />
                <div className="label">JForce</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Takumi"
                  onChange={handelFilterDepartment}
                />
                <div className="label">Takumi</div>
              </div>
            </div>
          )}
        </div>
        <div className="sidebar-line"></div>
        {/* Domain */}
        <div className="sidebar-domain">
          <div className="domain-heading">
            <div className="heading">Domain</div>
            {isDomainUpArrow ? (
              <img
                src={icon_arrow_up}
                className="icon-arrow_up"
                onClick={handleDomainClick}
              />
            ) : (
              <img
                src={icon_arrow_down}
                className="icon-arrow_down"
                onClick={handleDomainClick}
              />
            )}
          </div>
          {!isDomainUpArrow && (
            <div className="filter-list">
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="BA"
                  onChange={handelFilterDomain}
                />
                <div className="label">BA</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Java"
                  onChange={handelFilterDomain}
                />
                <div className="label">Java</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Test"
                  onChange={handelFilterDomain}
                />
                <div className="label">Test</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Design"
                  onChange={handelFilterDomain}
                />
                <div className="label">Design</div>
              </div>
            </div>
          )}
        </div>
        <div className="sidebar-line"></div>
        {/* skill */}
        <div className="sidebar-skill">
          <div className="skill-heading">
            <div className="heading">Skill</div>
            {isSkillUpArrow ? (
              <img
                src={icon_arrow_up}
                className="icon-arrow_up"
                onClick={handleSkillClick}
              />
            ) : (
              <img
                src={icon_arrow_down}
                className="icon-arrow_down"
                onClick={handleSkillClick}
              />
            )}
          </div>
          {!isSkillUpArrow && (
            <div className="filter-list">
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="BA"
                  onChange={handleFilterSkill}
                />
                <div className="label">BA</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Java"
                  onChange={handleFilterSkill}
                />
                <div className="label">Java</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Test"
                  onChange={handleFilterSkill}
                />
                <div className="label">Test</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Design"
                  onChange={handleFilterSkill}
                />
                <div className="label">Design</div>
              </div>

              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="PM"
                  onChange={handleFilterSkill}
                />
                <div className="label">PM</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Brse"
                  onChange={handleFilterSkill}
                />
                <div className="label">Brse</div>
              </div>
            </div>
          )}
        </div>
        <div className="sidebar-line"></div>
        {/* level */}
        <div className="sidebar-level">
          <div className="level-heading">
            <div className="heading">Level</div>

            {isLevelUpArrow ? (
              <img
                src={icon_arrow_up}
                className="icon-arrow_up"
                onClick={handleLevelClick}
              />
            ) : (
              <img
                src={icon_arrow_down}
                className="icon-arrow_down"
                onClick={handleLevelClick}
              />
            )}
          </div>
          {!isLevelUpArrow && (
            <div className="filter-list">
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Sr"
                  onChange={handleFilterLevel}
                />
                <div className="label">Sr</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Ps"
                  onChange={handleFilterLevel}
                />
                <div className="label">Ps</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Md"
                  onChange={handleFilterLevel}
                />
                <div className="label">Md</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Jr"
                  onChange={handleFilterLevel}
                />
                <div className="label">Jr</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Fs"
                  onChange={handleFilterLevel}
                />
                <div className="label">Fs</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Ex"
                  onChange={handleFilterLevel}
                />
                <div className="label">Ex</div>
              </div>
            </div>
          )}
        </div>
        <div className="sidebar-line"></div>
        {/* Work status */}
        <div className="sidebar-work-status">
          <div className="work-status-heading">
            <div className="heading">Work status</div>

            {isWorkStatusArrow ? (
              <img
                src={icon_arrow_up}
                className="icon-arrow_up"
                onClick={handleWorkStatusClick}
              />
            ) : (
              <img
                src={icon_arrow_down}
                className="icon-arrow_down"
                onClick={handleWorkStatusClick}
              />
            )}
          </div>
          {!isWorkStatusArrow && (
            <div className="filter-list">
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Active"
                />
                <div className="label">Active</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="leave"
                />
                <div className="label">leave</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="resource-content">
        <div className="resource-content-heading">
          <div className="title-content">Resource List</div>
          <div className="btn-resource">
            <button className="btn-import">Import</button>
            <button className="btn-add">Add</button>
          </div>
        </div>

        <div className="input-suffix">
          <input placeholder="Search by Name" className="input-search" />
          <div className="btn-sufix">
            <img src={icon_search} className="icon-search" />
          </div>
        </div>

        <div className="resource-content-table">
          <div className="table-title">
            <input type="checkbox" className="input-checkbox" />
            <div className="item-title table-title__name">
              <div className="item-title-heading">Name</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
            <div className="item-title table-title__skill-1">
              <div className="item-title-heading">Skill 1</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
            <div className="item-title table-title__skill-2">
              <div className="item-title-heading">Skill 2</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
            <div className="item-title  table-title__department">
              <div className="item-title-heading">Department</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
            <div className="item-title table-title__domain">
              <div className="item-title-heading">Domain</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
            <div className="item-title table-title__study">
              <div className="item-title-heading">Study point</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
            <div className="item-title table-title__status">
              <div className="item-title-heading">Work status</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
            <div className="item-title table-title__alias-1">
              <div className="item-title-heading">Alias 1</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
            <div className="item-title table-title__alias-2">
              <div className="item-title-heading">Alias 2</div>
              <img src={icon_sort_alt} className="icon-sort" />
            </div>
          </div>
          {listDataFilter.map((item, index) => {
            return (
              <div className="table-content-row">
                <input type="checkbox" className="item-title-checkbox" />
                <div className="table-title__name item-user-name ">
                  <img src={image_user} className="image-user" />
                  <div className="item-user-title">{item.name}</div>
                </div>
                <div className="table-title__skill-1 item-user item-skill">
                  <div className="item-skill-title"> {item.skill1} </div>
                  <div
                    className={`level ${
                      dataLevel.find((section) => section.level === item.level1)
                        ?.classCSS
                    }`}
                  >
                    {item.level1}{" "}
                  </div>
                </div>
                <div className="table-title__skill-2 item-user">
                  <div className="item-skill-title"> {item.skill2} </div>
                  <div
                    className={`level ${
                      dataLevel.find((section) => section.level === item.level2)
                        ?.classCSS
                    }`}
                  >
                    {item.level2}{" "}
                  </div>
                </div>
                <div className="table-title__department item-user item-department-title">
                  {item.department}
                </div>
                <div className="table-title__domain item-user item-domain-title">
                  {item.domain}
                </div>
                <div className="table-title__study item-user item-study-title">
                  {item.Study_point}
                </div>
                <div className="table-title__status item-user item-status-title">
                  {item.Work_status}
                </div>
                <div className="table-title__alias-1 item-user item-alisa-title">
                  {item.Alisa}
                </div>
                <div className="table-title__alias-2 item-user item-alisa-title">
                  {item.Alisa}
                </div>
              </div>
            );
          })}
        </div>

        <div className="resource-content-footer">
          <div className="resource-content-pagination">
            <div className="footer-text"> 1 - 20 of 200</div>
            <div className="footer-pagination">
              <div className="pagination-icon-back">
                <img src={icon_arrow_back_back} className="icon-arrow-back" />
                <img src={icon_arrow_back} className="icon-arrow-back" />
              </div>
              <div className="pagination-text">1</div>
              <div className="pagination-icon-forward">
                <img src={icon_arrow_forward} className="icon-arrow-forward" />
                <img
                  src={icon_arrow_forward_forward}
                  className="icon-arrow-forward"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceManage;
