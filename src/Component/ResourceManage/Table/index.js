import React from "react";
import "./table.scss";
import Header from "./Header";
import ContentTable from "./ContentTable";
import Pagination from "./Pagination";

function Table({ listDataFilter, dataLevel, handleSearch }) {
  return (
    <div className="resource-content">
      <Header handleSearch={handleSearch} />
      <ContentTable listDataFilter={listDataFilter} dataLevel={dataLevel} />
      <Pagination />
    </div>
  );
}

export default Table;
