import React from "react";
import icon_search from "../image/bx-search-alt.png";
import "./header.scss";

function Header({handleSearch}) {
  return (
    <div className="wrapper-header">
      <div className="resource-content-heading">
        <div className="title-content"> Resource List</div>
        <div className="btn-resource">
          <button className=" btn-common btn-import">Import</button>
          <button className=" btn-common btn-add">Add</button>
        </div>
      </div>
      <div className="input-suffix">
          <input placeholder="Search by Name" className="input-search" onChange={handleSearch}/>
          <div className="btn-sufix">
            <img src={icon_search} className="icon-search" />
          </div>
        </div>
    </div>
  );
}

export default Header;
