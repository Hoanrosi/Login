import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import ErrorMessage from "../Errors";
import InputForm from "../InputForm";

function ForgotPass({ handleSubmit }) {
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setEmail(e.target.value);
    validateForm(); // kiểm tra giá trị mới để xóa thông báo lỗi
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!email) {
      errors.email = "Please enter email";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSend = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setEmail(""); // Reset lại giá trị của form

      setFormErrors({}); // xóa thông báo lỗi
      handleSubmit();
    }
  };

  return (
    <div className="form-forgotpass">
      <div className="heading">Forgot password</div>
      <div className="description font-noto">
        Please enter your email address to receive a temporary password.{" "}
      </div>
      <div className="form-forgot">
        <InputForm
          nameLabel="Email"
          nameInput="email"
          required
          value={email}
          typeInput="text"
          handleChange={handleChange}
          error={formErrors.email}
        />
      </div>

      <div className="btn-form">
        <Link to="/" className="btn btn-cancel">
          Cancel
        </Link>
        <Link to="/create-password" className="btn btn-send">
          Send
        </Link>
      </div>
    </div>
  );
}

export default ForgotPass;
