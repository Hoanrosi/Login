function renderErrors(errors) {
  if (errors) {
    return <div style={{ color: "red" }}>{errors}</div>;
  }else{
    return null
  }
}

export default renderErrors;