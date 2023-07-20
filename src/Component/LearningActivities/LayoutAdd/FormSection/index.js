import React from "react";
import { Input } from "antd";
import { Select } from "antd";
import axios from "axios";
import "./form-section.scss";
import icon_down from "../image/arrow-chevron-down.png";
import icon_calender from "../image/bx-calendar.png";
function FormSection({
  title,
  obligatory,
  type,
  namePlaceholder,
  options,
  selectValue,
  handleChange,
}) {
  const Suffix = () => {
    return (
      <div>
        {type === "select" ? (
          <img src={icon_down} />
        ) : (
          <img src={icon_calender} />
        )}
      </div>
    );
  };
  return (
    <div className="form-layout-section">
      <div className="form-layout-section-heading">
        {title}
        {obligatory ? <span className="input-obligatory">*</span> : null}
      </div>

      <Select
        placeholder={namePlaceholder}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={options}
        value={selectValue}
        onChange={handleChange}
      />
      {/* <Input
        placeholder={namePlaceholder}
        classNames="from-section-input"
        suffix={<Suffix />}
      /> */}
    </div>
  );
}

export default FormSection;
