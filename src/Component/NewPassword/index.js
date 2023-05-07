import React from "react";
import "./style.scss";
import InputForm from "../InputForm";
function NewPassword({ isPasswordVisible, togglePassword }) {
  return (
    <div className="create-new-password">
      <div className="heading">Create new password</div>
      <div className="description">
        We have sent a temporary password to your email. Please check your email
        to get it, then create new password.{" "}
      </div>
      <div className="form-create">
        <InputForm
          nameLabel="Password"
          nameInput="password"
          required
          typeInput="password"
          isPasswordVisible={isPasswordVisible}
          togglePassword={togglePassword}
        />

        <div className="resend-password">Resend password </div>
        <InputForm
          nameLabel="New password"
          nameInput="newPassword"
          required
          typeInput="password"
          isPasswordVisible={isPasswordVisible}
          togglePassword={togglePassword}
        />
        <InputForm
          nameLabel="Confirm new password "
          nameInput="confirmPassword"
          required
          typeInput="password"
          isPasswordVisible={isPasswordVisible}
          togglePassword={togglePassword}
        />

        <div className="btn-form">
          <button className="btn btn-cancel">Cancel</button>
          <button className="btn btn-save">Save</button>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
