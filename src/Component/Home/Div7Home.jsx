import React from "react";
import Heading from "../Heading";
import "../../Assets/Css/Home/Div7Home.css";
import data from "../../Assets/Data/HomeSlider.json";

import Img1 from "../../Assets/Images/Blog/pro-1.jpg"

import Prof from "../../Assets/Images/profile/Prof.png"



export default function Div7Home() {
  const Image = [Img1,Img1,Img1]
  return (
    <div className="Div7Home">
      <div className="container">
        <Heading title="Latest Posts" text="Our Blog Posts" />
        <div className="cards justify-center">
          {data.blogs.map((item, index) => {
            
            return (
              
                <div key={index} className="specialCards">
                  <img src={Image[index]} alt="" />
                  <div>
                    <h3>{item.topic}</h3>
                    <div className="flex">
                      <img src={Prof} alt="" />
                      <div className="vertical-center">
                        <h5>{item.name} </h5>
                        <h6>{item.time} </h6>
                      </div>
                    </div>
                  </div>
                </div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
}
