import React from "react";
import Button from "../Buttons";
import "../../Assets/Css/Home/Div4Home.css";

export default function Div4Home() {
  return (
    <div className="Div4Home justify-center vertical-center ">
      <div className="container">
        <h2>
          “ The beautiful thing about learning is that no one can take it away
          from you ”
        </h2>
        <div className="button flex justify-center">
          <Button look="light" title="Read More" />
          <Button look="dark" title="Contact Us" />
        </div>
      </div>
    </div>
  );
}
