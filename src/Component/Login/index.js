import React from "react";
import "./styles.scss";
import icon from "../image/Icon.svg";
import renderErrors from "../Errors";

function Login(props) {
  const {
    handleSubmit,
    formValues,
    handleChange,
    formErrors,
    handleForgotPassword,
  } = props;
  return (
    <div className="login">
      <div className="heading">Login</div>
      <div className="form-information">
        <div className="infor-item">
          <label className=" font-noto item-label">
            Account name <span className="start">*</span>
          </label>
          <input
            className="item-input"
            type="text"
            placeholder="Email@example.com"
            name="accountName"
            value={formValues.accountName}
            onChange={handleChange}
          />
          {renderErrors(formErrors.accountName)}
        </div>

        <div className="infor-item">
          <label className=" font-noto item-label">
            Password <span className="start">*</span>
          </label>
          <div className="input-wrapper">
            <input
              className="item-input"
              type="password"
              placeholder="Input password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <img className="suffix-icon" src={icon} />
          </div>
          {renderErrors(formErrors.password)}
        </div>
        <div
          className="forgot-password font-noto"
          onClick={handleForgotPassword}
        >
          Forgot password
        </div>
      </div>
      <div className="button font-noto" onClick={handleSubmit}>
        Login
      </div>
    </div>
  );
}

export default Login;
