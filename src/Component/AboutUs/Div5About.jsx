import React from "react";
import data from "../../Assets/Data/HomeSlider.json";
import "../../Assets/Css/AboutUs/Div5About.css";
import "../../Assets/Css/Common.css";



import Heading from "../Heading.jsx";
export default function Div5About() {

  return (
    <div className="Div5About">
      <div className="container">
        <Heading title="Meet Our Team" text="Popular Instructor" />
        <div className="cards justify-center">
          {data.team.map((item, index) => {
          
            return (
              <div key={index} className="singleCard">
                <img src="https://picsum.photos/id/1005/200/300" alt="" />
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
