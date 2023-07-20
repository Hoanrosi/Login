import React from "react";
import SidebarLearning from "./SidebarLearning";
import ContentLearning from "./ContentTable";
import "./learning-activity.scss";

function LayoutLearning() {
  return (
    <div className="learning-activity">
      <SidebarLearning />
      <ContentLearning />
    </div>
  );
}

export default LayoutLearning;
