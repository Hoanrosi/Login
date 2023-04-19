import React from "react";
import "./styles.scss";
import icon from "../image/Icon.svg";

function Login(props) {
  const { handleSubmit, formValues, handleChange, formErrors,handleForgotPassword } = props;
  return (
    <div className="login">
      <div className="heading">Login</div>
      <div className="form-information">
        <div className="infor-item">
          <label className="item-label">
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
          {formErrors.accountName && (
            <div style={{ color: "red" }}>{formErrors.accountName}</div>
          )}
        </div>

        <div className="infor-item">
          <label className="item-label">
            Password <span className="start">*</span>
          </label>
          <div className="input-wrapper">
            <input
              className="item-input"
              type="password"
              placeholder="input password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <img className="suffix-icon" src={icon} />
          </div>
          {formErrors.password && (
            <div style={{ color: "red" }}>{formErrors.password}</div>
          )}
        </div>
        <div className="forgot-password" onClick={handleForgotPassword}>Forgot password</div>
      </div>
      <div className="button" onClick={handleSubmit}>
        Login
      </div>
    </div>
  );
}

export default Login;
