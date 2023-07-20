import React from "react";
import { Table } from "antd";
import "./content-table.scss";
import HeaderActivities from "../HeaderActivities";
import TableLearning from "./TableLearning";

function ContentLearning() {
  return (
    <div className="table-learning">
      <HeaderActivities />
      <TableLearning />
    </div>
  );
}

export default ContentLearning;
