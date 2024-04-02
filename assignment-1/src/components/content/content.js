import React from "react";
import "./content.css";

export default function Header(props) {
  return (
    <div className="content">
      <h1>{props.view}</h1>
    </div>
  );
}
