import React, { useState } from "react";
import Layout from "./Component/Layout";
import Login from "./Component/Login";
import ForgotPass from "./Component/ForgotPass";
import NewPassword from "./Component/NewPassword";
import Errors from "./Component/Errors";

function App() {
  const [pageType, setPageType] = useState("login");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Reset lại giá trị của form
      setFormValues({ accountName: "", password: "" });

      // Xóa thông báo lỗi
      setFormErrors({});
    }
  };

  //================== handleForgotPassword===========
  const handleForgotPassword = () => {
    setPageType("forgot_Password");
  };

  //===============handleCancel==================
  const handleCancel = () => {
    setPageType("login");
  };

  //=============== handleSend======================
  const handleSend = () => {
    setPageType("create_newpass");
  };
  let content;
  switch (pageType) {
    case "login":
      content = (
        <Login
          handleSubmit={handleSubmit}
          formValues={formValues}
          handleChange={handleChange}
          formErrors={formErrors}
          handleForgotPassword={handleForgotPassword}
        />
      );
      break;
    case "forgot_Password":
      content = (
        <ForgotPass handleCancel={handleCancel} handleSend={handleSend} />
      );
      break;

    case "create_newpass":
      content = <NewPassword />;
      break;
  }
  return (
    <div className="App">
      <Layout>{content}</Layout>
    </div>
  );
}

export default App;
