import React, { useState } from "react";
import ErrorMessage from "../Errors";
import "./inputform.scss";
import icon from "../image/Icon.svg";

function InputForm(props) {
  const {
    nameLabel,
    nameInput,
    handleChange,
    typeInput,
    value,
    error,
    required,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  //============== inputPassword================
  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const renderInput = () => {
    switch (typeInput) {
      case "text": {
        return (
          <div className="input-wrapper">
            <input
              className="item-input"
              type="text"
              placeholder="Email@example.com"
              name={nameInput}
              value={value}
              onChange={handleChange}
            />
          </div>
        );
      }
      case "password": {
        return (
          <div className="input-wrapper">
            <input
              className="item-input"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Input password"
              name={nameInput}
              value={value}
              onChange={handleChange}
            />
            <img className="suffix-icon" src={icon} onClick={togglePassword} />
          </div>
        );
      }
    }
  };

  return (
    <div className="infor-item">
      <label className=" font-noto item-label">
        {nameLabel} {required && <span className="start">*</span>}
      </label>
      {renderInput()}
      <ErrorMessage error={error} />
    </div>
  );
}

export default InputForm;
