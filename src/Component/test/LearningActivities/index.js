import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { Checkbox } from "antd";
import "./learning-activity.scss";
import Header from "../ResourceManage/Table/Header";
import SidebarLearning from "./SidebarLearning";
import ContentLearning from "./ContentTable/index";
import LayoutLearning from "./LayoutLearningActivities";

function LearningActivity() {
  return (
    <div className="learning-activity">
      <SidebarLearning />
      <ContentLearning />
    </div>
  );
}

export default LearningActivity;
