import React from "react";
import "./table.scss";
import Header from "./Header";
import ContentTable from "./Content-table";
import Pagination from "./Pagination";

function Table({listDataFilter,dataLevel}) {
  return (
    <div className="resource-content">
      <Header />
      <ContentTable  listDataFilter={listDataFilter} dataLevel={dataLevel}/>
      <Pagination/>
    </div>
  );
}

export default Table;
