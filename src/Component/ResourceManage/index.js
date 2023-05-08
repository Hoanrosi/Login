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
  const [filterData, setFilterData] = useState([]);
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

  const handelFilter = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(isChecked);

    if (isChecked) {
      setFilterData([...filterData, value]);
    } else {
      const filterList = filterData.filter((item) => item != value);
      setFilterData(filterList);
    }
  };

  useEffect(() => {
    if (filterData.length > 0) {
      const listDataNew = dataList.filter((itemData) => {
        return filterData.every((value) => {
          return (
            itemData.department===value ||
            itemData.domain === value ||
            itemData.skill1 === value ||
            itemData.skill2 === value ||
            itemData.level1 === value ||
            itemData.level2 === value ||
            itemData.Work_status === value
          );
        });
      });
      setListDataFilter(listDataNew);
    } else {
      setListDataFilter(listData);
    }
  }, [filterData]);
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
                  onChange={handelFilter}
                />
                <div className="label">DU10</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="DU12"
                  onChange={handelFilter}
                />
                <div className="label">DU12</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="JForce"
                  onChange={handelFilter}
                />
                <div className="label">JForce</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Takumi"
                  onChange={handelFilter}
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
                  onChange={handelFilter}
                />
                <div className="label">BA</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Java"
                  onChange={handelFilter}
                />
                <div className="label">Java</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Test"
                  onChange={handelFilter}
                />
                <div className="label">Test</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Design"
                  onChange={handelFilter}
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
                <input type="checkbox" className="checkbox-input" />
                <div className="label">BA</div>
              </div>
              <div className="filter-item">
                <input type="checkbox" className="checkbox-input" />
                <div className="label">Java</div>
              </div>
              <div className="filter-item">
                <input type="checkbox" className="checkbox-input" />
                <div className="label">Test</div>
              </div>
              <div className="filter-item">
                <input type="checkbox" className="checkbox-input" />
                <div className="label">Design</div>
              </div>

              <div className="filter-item">
                <input type="checkbox" className="checkbox-input" />
                <div className="label">PM</div>
              </div>
              <div className="filter-item">
                <input type="checkbox" className="checkbox-input" />
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
                  onChange={handelFilter}
                />
                <div className="label">Sr</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Ps"
                  onChange={handelFilter}
                />
                <div className="label">Ps</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Md"
                  onChange={handelFilter}
                />
                <div className="label">Md</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Jr"
                  onChange={handelFilter}
                />
                <div className="label">Jr</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Fs"
                  onChange={handelFilter}
                />
                <div className="label">Fs</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="Ex"
                  onChange={handelFilter}
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
                  onChange={handelFilter}
                />
                <div className="label">Active</div>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  value="leave"
                  onChange={handelFilter}
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
