import React from "react";
import "../Assets/Css/Heading.css";

export default function Heading(props) {
  return (
    <div className="headiing">
      
        <h2>
          <hr /> {props.title}
        </h2>
        <h1>{props.text}</h1>

    </div>
  );
}
