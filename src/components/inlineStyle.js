import React from "react";
import "./stylesheet.css";

const heading = {
  fontSize: "75px",
  color: "blue"
};

const InlineStyle = () => {
  return <div style={heading}>CSS Stylesheet</div>;
};

export default InlineStyle;
