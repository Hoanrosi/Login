import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import InputForm from "../InputForm";

function Login(props) {
  const {  handleTransfer } = props;
  const [formValues, setFormValues] = useState({
    accountName: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    accountName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((pre) => ({ ...pre, [name]: value }));
    validateForm(); // kiểm tra giá trị mới và xóa thông báo lỗi nếu thấy hợp lệ
  };

  //=================== validateForm===============
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formValues.accountName) {
      errors.accountName = "Please enter account name";
      isValid = false;
    }

    if (!formValues.password) {
      errors.password = "Please enter password";
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

  //============== handleSubmitForm===================
  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Reset lại giá trị của form
      setFormValues({ accountName: "", password: "" });

      // Xóa thông báo lỗi
      setFormErrors({});

      handleTransfer();
    }
  };

  return (
    <div className="login">
      <div className="heading-login">Login</div>
      <div className="form-information">
        <InputForm
          nameLabel=" Account name"
          nameInput="accountName"
          required
          value={formValues.accountName}
          typeInput="text"
          error={formErrors.accountName}
          handleChange={handleChange}
        />

        <InputForm
          nameLabel="Password"
          nameInput="password"
          required
          value={formValues.password}
          typeInput="password"
          error={formErrors.password}
          handleChange={handleChange}
        />

        <Link to="/forgot-password" className="forgot-password font-noto">
          Forgot password
        </Link>
      </div>
      <Link to ="/my-profile" className="button font-noto" onClick={handleLogin}>
        Login
      </Link>
    </div>
  );
}

export default Login;
