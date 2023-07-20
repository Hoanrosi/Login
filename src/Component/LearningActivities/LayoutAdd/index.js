import React, { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import axios from "axios";
import icon_arrow from "./image/arrow-chevron-back.png";
import "./layout-add.scss";
import FormSection from "./FormSection";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function LayoutAdd() {
  const [countWord, setCountWord] = useState(5000);
  const [formData, setFormData] = useState({
    department: "2d64c9f8-59b8-42c2-b889-8d8a03a45a54",
    domain: "7022854e-2084-47de-b02d-20e13d9edf11",
    learningActivityType: "9bfc70bf-0c31-4200-95a5-3dedbe9a9e18",
    type: "one",
    name: "dsfsdf",
  });
  const handleChangeDepartment = (value) => {
    setFormData({
      ...formData,
      department: value,
    });
  };

  const handleChangeLearningActivities = (value) => {
    setFormData({
      ...formData,
      learningActivityType: value,
    });
  };

  const handleChangeDomain = (value) => {
    setFormData({
      ...formData,
      domain: value,
    });
  };
  const LearningActivitiesOptions = [
    {
      value: "front end",
      label: "front end",
    },
    {
      value: "back end",
      label: "back end",
    },
    {
      value: "blockChain",
      label: "blockChain",
    },
  ];

  const domainOptions = [
    {
      value: "7022854e-2084-47de-b02d-20e13d9edf11",
      label: "BA",
    },
    {
      value: "Design",
      label: "Design",
    },
    {
      value: "FE",
      label: "FE",
    },
    {
      value: "Donet",
      label: "Donet",
    },
  ];

  const typeOptions = [
    {
      value: " Atend seminar",
      label: "Atend seminar",
    },
    {
      value: " join the club",
      label: "join the club",
    },
    {
      value: " Atend seminar Online",
      label: "Atend seminar Online",
    },
  ];

  const departmentOptions = [
    {
      value: "DU10",
      label: "DU10",
    },
    {
      value: "2d64c9f8-59b8-42c2-b889-8d8a03a45a54",
      label: "DU13",
    },
    {
      value: "DU12",
      label: "DU12",
    },
    {
      value: "Takumi",
      label: "Takumi",
    },
  ];
  const handleSaveEvent = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://192.168.3.114:9001/api/v1/learning-activities",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCountWord = (e) => {
    const result = e.target.value;
    const remainingChars = 5000 - result.length;
    setCountWord(remainingChars);
  };
  return (
    <div className="layout-add">
      <Breadcrumb
        items={[
          {
            title: <a href="">Learning Activities</a>,
          },
          {
            title: <a href="">Add New Learning Activities</a>,
          },
        ]}
      />
      <div className="form-layout-add">
        <div className="form-layout-add-title">
          <img src={icon_arrow} className="form-add-icon" />
          <div className="form-add-heading">Add New Learning Activities</div>
        </div>

        <div className="form-layout-add-content">
          <div className="form-add-content-input">
            <div className="form-add-content-left">
              <FormSection
                title="Learning activities"
                obligatory
                namePlaceholder="Input learning activities"
                type="select"
                options={LearningActivitiesOptions}
                handleChange={handleChangeLearningActivities}
              />
              <FormSection
                title="Domain"
                obligatory
                namePlaceholder="Please select"
                type="select"
                options={domainOptions}
                handleChange={handleChangeDomain}
              />
              {/* <FormSection
                title="Period time"
                obligatory
                namePlaceholder="Please select"
                type="time"
              /> */}
              <Space direction="vertical" size={12}>
                <div>Period time</div>
                <RangePicker style={{ width: "100%" }} />
              </Space>
            </div>
            <div className="form-add-content-right">
              <FormSection
                title="Type"
                obligatory
                namePlaceholder="Please select"
                type="select"
                options={typeOptions}
                // handleChange={handleChange}
              />
              <FormSection
                title="Department"
                obligatory
                namePlaceholder="Please select"
                type="select"
                options={departmentOptions}
                selectValue={formData.department}
                handleChange={handleChangeDepartment}
              />
            </div>
          </div>
          <div className="form-layout-add-description">
            <div className="form-add-description-heading">Description</div>
            <div className="form-add-input-descripton">
              <TextArea
                placeholder="Input description"
                rows={6}
                onChange={handleCountWord}
                autoSize
                style={{ paddingBottom: 50 }}
              />
              <div className="note-description">
                {countWord} characters remaining
              </div>
            </div>
            <div>
              <button
                className="form-layout-btn-save"
                onClick={handleSaveEvent}
              >
                {" "}
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LayoutAdd;
