import React, { useState } from "react";
import { Divider, Radio, Table, Space } from "antd";
import { Image } from "antd";
import { Checkbox, Tag } from "antd";
import iconShort from "./image/bx-sort-alt-2.png";
import "./table-learning.scss";
import { ACTIVITY_STATUS } from "../../../../../variables/variables";
import { ACTIVITY_PROGRESS } from "../../../../../variables/variables";
function TableLearning() {
  const [checkBox, setCheckBox] = useState(false);

  const columns = [
    {
      title: () => {
        return (
          <Space>
            Learning activities
            <Image src={iconShort} width={16} />
          </Space>
        );
      },
      dataIndex: "learningActivities",
      key: "learningActivities",
      width: 200,
      className: "table-learning-activies",
      fixed: "left",
    },

    {
      title: () => {
        return (
          <Space className="table-header-learning">
            Type
            <Image src={iconShort} width={16} />
          </Space>
        );
      },
      ellipsis: true,
      dataIndex: "type",
      key: "type",
      width: 100,
      // render: (text) => {
      //   return <div className="table-type">{text}</div>;
      // },
    },
    {
      title: (
        <Space>
          Domain
          <Image src={iconShort} width={16} />
        </Space>
      ),
      dataIndex: "domain",
      width: 120,
      key: "domain",
      className: "table-domain",
    },
    {
      title: () => {
        return (
          <Space>
            Host/ Performer
            <Image src={iconShort} width={16} />
          </Space>
        );
      },
      dataIndex: "hostPerformer",
      key: "hostPerformer",
      width: 100,
      className: "table-hostPerformer",
    },
    {
      title: (
        <Space>
          Participants
          <Image src={iconShort} width={16} />
        </Space>
      ),
      dataIndex: "participants",
      key: "participants",
      width: 140,
      className: "table-participants",
    },
    {
      title: (
        <Space>
          Progress
          <Image src={iconShort} width={16} />
        </Space>
      ),
      dataIndex: "progress",
      key: "progress",
      width: 180,
      // className: "table-progress",
      render: (text) => {
        console.log("text:>>>", text);
        return (
          <span
            className={`activity-progress activity-progress--${ACTIVITY_PROGRESS[text]?.color}`}
          >
            {ACTIVITY_PROGRESS[text]?.label}
          </span>
        );
      },
    },
    {
      title: (
        <Space>
          ApprovalStatus
          <Image src={iconShort} width={16} />
        </Space>
      ),
      dataIndex: "approvalStatus",
      key: "approvalStatus",
      className: "table-approvalStatus",
      render: (text) => {
        console.log("text :>> ", text);
        return (
          <span
            className={`activity-status activity-status--${ACTIVITY_STATUS[text]?.color}`}
          >
            {ACTIVITY_STATUS[text]?.label}
          </span>
        );
      },
      width: 100,
    },
  ];
  const dataSource = [
    {
      key: 1,
      learningActivities: "CCBA",
      type: "Achieved BA CCBA",
      domain: "BA",
      hostPerformer: "Mizuki",
      participants: "1",
      progress: "Notyet",
      approvalStatus: "Pending",
    },
    {
      key: 2,
      learningActivities: "ACBA",
      type: "Achieved BA ACBA",
      domain: "BA",
      hostPerformer: "Chloe",
      participants: "1",
      progress: "Ongoing",
      approvalStatus: "Approved",
    },
    {
      key: 3,
      learningActivities: "Join the club",
      type: "Attend seminar",
      domain: "Tester",
      hostPerformer: "Chloe",
      participants: "20",
      progress: "Ongoing",
      approvalStatus: "",
    },
    {
      key: 4,
      learningActivities: "ISTQB",
      type: "ISTQB Advance",
      domain: "BA",
      hostPerformer: "Chloe",
      participants: "1",
      progress: "Ongoing",
      approvalStatus: "Rejected",
    },
    {
      key: 5,
      learningActivities: "Seminar 1",
      type: "Attend seminar",
      domain: "Tester",
      hostPerformer: "Chloe",
      participants: "20",
      progress: "Ongoing",
      approvalStatus: "",
    },
    {
      key: 6,
      learningActivities: "Join the club",
      type: "Attend seminar",
      domain: "Tester",
      hostPerformer: "Chloe",
      participants: "20",
      progress: "Notyet",
      approvalStatus: "",
    },
    {
      key: 7,
      learningActivities: "Seminar 1",
      type: "BA Training",
      domain: "BA",
      hostPerformer: "Mizuki",
      participants: "20",
      progress: "Notyet",
      approvalStatus: "",
    },
    {
      key: 8,
      learningActivities: "ISTQB Foundation",
      type: "ISTQB Foundation- Agile Tester",
      domain: "Tester",
      hostPerformer: "Mizuki",
      participants: "20",
      progress: "Ended",
      approvalStatus: "Pending",
    },
    {
      key: 9,
      learningActivities: "Join the club",
      type: "BA Training",
      domain: "BA",
      hostPerformer: "Mizuki",
      participants: "20",
      progress: "Ended",
      approvalStatus: "",
    },
    {
      key: 10,
      learningActivities: "Join the club",
      type: "BA Training",
      domain: "BA",
      hostPerformer: "Mizuki",
      participants: "20",
      progress: "Ended",
      approvalStatus: "",
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={true}
        scroll={{ x: 800 }}
      />
    </div>
  );
}

export default TableLearning;
