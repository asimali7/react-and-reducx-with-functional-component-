import React from "react";
const button = (props) => {
  const title = props.title ? props.title : "No Title";
  const width = props.width ? props.width : 200;
  const height = props.height ? props.height : 30;
  const onclick = props.onclick;
  return (
    <div>
      <button
        style={{
          width,
          height,
          backgroundColor: "#f0f0f0",
          borderRadius: 10,
          display: "inline",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={onclick}
      >
        {title}
      </button>
    </div>
  );
};

export default button;
