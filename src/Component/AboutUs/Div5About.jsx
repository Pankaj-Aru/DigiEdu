import React from "react";
import data from "../../Assets/Data/HomeSlider.json";
import "../../Assets/Css/AboutUs/Div5About.css";
import "../../Assets/Css/Common.css";
import Img0 from "../../Assets/Images/Instructor/instr-0.jpg"
import Img1 from "../../Assets/Images/Instructor/instr-1.jpg"
import Img2 from "../../Assets/Images/Instructor/instr-2.jpg"
import Img3 from "../../Assets/Images/Instructor/instr-3.jpg"
import Img4 from "../../Assets/Images/Instructor/instr-4.jpg"
import Img5 from "../../Assets/Images/Instructor/instr-5.jpg"
import Img6 from "../../Assets/Images/Instructor/instr-6.jpg"
import Img7 from "../../Assets/Images/Instructor/instr-7.jpg"
import Img8 from "../../Assets/Images/Instructor/instr-8.jpg"
import Img9 from "../../Assets/Images/Instructor/instr-9.jpg"

import Heading from "../Heading.jsx";
export default function Div5About() {
  const Images=[Img0,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9]
  return (
    <div className="Div5About">
      <div className="container">
        <Heading title="Meet Our Team" text="Popular Instructor" />
        <div className="cards justify-center">
          {data.team.map((item, index) => {
          
            return (
              <div key={index} className="singleCard">
                <img src={Images[index]} alt="" />
                <div>
                  <h2>{item.name}</h2>
                  <h4>{item.prof}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
