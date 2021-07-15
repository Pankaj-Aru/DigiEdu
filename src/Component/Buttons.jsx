import React from "react";
import "../Assets/Css/Buttons.css"

export default function Buttons(props) {



    return (
        <>
          <div >
              <button onClick={props.onclick} className={props.look}>{props.title} </button>
          </div>
        </>
      );



  
}
