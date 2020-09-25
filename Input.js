import React from "react";
const input = (props) => {
  const title = props.title ? props.title : "No title";
  const onChangeText = props.onChangeText
    ? props.onChangeText
    : console.log("Error");

  return <input placeholder={title} type="text" onChange={onChangeText} />;
};

export default input;
