import React from "react";
import { dataLevel } from "../../dataLevel";
import { dataList } from "../../data";

function SectionSkill({ itemSkill, itemLevel, levelClass }) {
  return (
    <div className="table-title__skill item-user-skill">
      <div className="item-skill-title"> {itemSkill} </div>
      <div className={`level ${levelClass}`}>{itemLevel} </div>
    </div>
  );
}

export default SectionSkill;
