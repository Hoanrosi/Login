import React, { useState } from "react";
import AuthenLayout from "./Component/Layout/Authen";
import AppLayout from "./Component/Layout/AppLayout";
import Login from "./Component/Login";
import ForgotPass from "./Component/ForgotPass";
import NewPassword from "./Component/NewPassword";
import MyProfile from "./Component/Profile";
import ResourceManage from "./Component/ResourceManage";
import { PAGE_TYPE } from "./variables/variables";

function App() {
  const [pageType, setPageType] = useState(PAGE_TYPE.LOGIN);

  //================== handleForgotPassword===========
  const handleForgotPassword = () => {
    setPageType(PAGE_TYPE.FORGOT_PASSWORD);
  };

  //===============handleCancel==================
  const handleCancel = () => {
    setPageType(PAGE_TYPE.LOGIN);
  };

  const handleSubmit = () => {
    setPageType(PAGE_TYPE.CREATE_PASSWORD);
  };

  const handleTransfer = () => {
    setPageType(PAGE_TYPE.MYPROFILE);
  };

  const handleResourceManage = () => {
    setPageType(PAGE_TYPE.RESOURCE_MANAGEMENT);
  };
  // let content;
  // switch (pageType) {
  //   case PAGE_TYPE.LOGIN:
  //     content = (
  //       <AuthenLayout>
  //         <Login
  //           handleForgotPassword={handleForgotPassword}
  //           handleTransfer={handleTransfer}
  //         />
  //         ;
  //       </AuthenLayout>
  //     );

  //     break;
  //   case PAGE_TYPE.FORGOT_PASSWORD:
  //     content = (
  //       <AuthenLayout>
  //         <ForgotPass
  //           handleCancel={handleCancel}
  //           setPageType={setPageType}
  //           handleSubmit={handleSubmit}
  //         />
  //       </AuthenLayout>
  //     );
  //     break;

  //   case PAGE_TYPE.CREATE_PASSWORD:
  //     content = (
  //       <AuthenLayout>
  //         <NewPassword />;
  //       </AuthenLayout>
  //     );

  //     break;
  //   case PAGE_TYPE.MYPROFILE:
  //     content = (
  //       <AppLayout
  //         title="My Profile"
  //         handleResourceManage={handleResourceManage}
  //       >
  //         <MyProfile />
  //       </AppLayout>
  //     );
  //     break;

  //   case PAGE_TYPE.RESOURCE_MANAGEMENT:
  //     content = (
  //       <AppLayout title="Resource Management">
  //         <ResourceManage />
  //       </AppLayout>
  //     );
  //     break;
  // }
  // return <div className="App">{content}</div>;
  return (
    <div className="App">
      <AppLayout title="Resource Management">
        <ResourceManage />
      </AppLayout>
    </div>
  );
}

export default App;
