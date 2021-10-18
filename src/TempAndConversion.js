import React from "react";

export default function TempAndConversion(props) {
  return <span>{Math.round(props.celsius)}C</span>;
}
