import React from "react";
import "./content-table.scss";
import image_user from "../image/image-user.jpg";
import icon_sort_alt from "../image/bx-sort-alt-2.png";
import SectionSkill from "../SectionSkill";
function ContentTable({ listDataFilter, dataLevel }) {
  const abbreviationMap = {
    Junior: "Jr",
    Senior: "Sr",
    Pre_Senior: "Pr",
    Middle: "Md",
    Fresher: "Fs",
    Expert: "Ex",
  };
  return (
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
        const levelClass1 = dataLevel.find(
          (section) => section.level === abbreviationMap[item.UserInfo.level1]
        )?.classCSS;
        const levelClass2 = dataLevel.find(
          (section) => section.level === item.level2
        )?.classCSS;

        return (
          <div className="table-content-row">
            <input type="checkbox" className="item-title-checkbox" />
            <div className="table-title__name item-user-name ">
              <img src={image_user} className="image-user" />
              <div className="item-user-title">{item.username}</div>
            </div>
            {/* <SectionSkill itemSkill={item.skill1} itemLevel={item.level1} levelClass={levelClass1} />
            <SectionSkill itemSkill={item.skill2} itemLevel={item.level2} levelClass={levelClass2} /> */}

            <div className="table-title__skill-1 item-user ">
              <div className="item-skill-title"> {item.UserInfo.skill1} </div>
              <div className={`level ${levelClass1}`}>
                {" "}
                {abbreviationMap[item.UserInfo.level1] ||
                  item.UserInfo.level1}{" "}
              </div>
            </div>
            <div className="table-title__skill-2 item-user ">
              <div className="item-skill-title"> {item.UserInfo.skill2} </div>
              <div className={`level ${levelClass2}`}>{item.level2} </div>
            </div>

            <div className="table-title__department item-user item-department-title">
              {item.Department && item.Department.name}
            </div>
            <div className="table-title__domain item-user item-domain-title">
              {item.Domain && item.Domain.name}
            </div>
            <div className="table-title__study item-user item-study-title">
              {item.Study_point}
            </div>
            <div className="table-title__status item-user item-status-title">
              {item.status}
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
  );
}

export default ContentTable;
