import React from "react";

function ErrorMessage({ error }) {
  console.log(error);
  return <div style={{ color: "red" }}>{error}</div>;
}

export default ErrorMessage;
