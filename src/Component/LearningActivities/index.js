import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { Checkbox } from "antd";
import Header from "../ResourceManage/Table/Header";
import LayoutLearning from "./LayoutLearningActivities";
import LayoutAdd from "./LayoutAdd";

function LearningActivity({ children }) {
  return <div>{children}</div>;
}

export default LearningActivity;
