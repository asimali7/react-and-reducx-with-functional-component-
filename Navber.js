import React from "react";
const Navber = (props) => {
  const label = props.label ? props.label : "No label";
  return <nav class="navbar navbar-light bg-light">{label}</nav>;
};

export default Navber;
