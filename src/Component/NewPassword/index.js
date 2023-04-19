import React from "react";
import "./style.scss";
import icon from "../image/Icon.svg";
function NewPassword() {
  return (
    <div className="create-new-password">
      <div className="heading">Create new password</div>
      <div className="description">
        We have sent a temporary password to your email. Please check your email
        to get it, then create new password.{" "}
      </div>
      <div className="form-create">
        <div className="form-item">
          <lable className="lable-form">
            Password <span>*</span>
          </lable>
          <div className="form-input">
            <input placeholder="Input password" className="input-item" />
            <img className="suffix-icon" src={icon} />
          </div>
          <div className="resend-password">Resend password </div>
        </div>
        <div className="form-item">
          <lable className="lable-form">
            New password<span>*</span>
          </lable>
          <div className="form-input">
            <input placeholder="Input new  password" className="input-item" />
            <img className="suffix-icon" src={icon} />
          </div>
        </div>
        <div className="form-item">
          <lable className="lable-form">
            Confirm new password <span>*</span>
          </lable>
          <div className="form-input">
            <input placeholder="Confirm new password" className="input-item" />
            <img className="suffix-icon" src={icon} />
          </div>
        </div>
        <div className="btn-form">
          <button className="btn btn-cancel">Cancel</button>
          <button className="btn btn-save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
