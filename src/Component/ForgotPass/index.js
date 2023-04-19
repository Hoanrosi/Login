import React from "react";
import "./style.scss"

function ForgotPass({handleCancel,handleSend}) {
  return (
    <div className="form-forgotpass">
      <div className="heading">Forgot password</div>
      <div className="description">
        Please enter your email address to receive a temporary password.{" "}
      </div>
      <div className="form-forgot">
        <label className="label-form">
          Email <span className="start">*</span>
        </label>
        <input className="input-form" placeholder="email@example.com" />
      </div>
      <div className="btn-form">
        <button className="btn btn-cancel" onClick = {handleCancel}>Cancel</button>
        <button className="btn btn-send" onClick = {handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ForgotPass;
