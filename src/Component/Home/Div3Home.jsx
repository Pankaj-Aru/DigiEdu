import React from "react";
import Button from "../Buttons"
import Heading from "../Heading.jsx"


import Prof from "../../Assets/Images/profile/Prof.png"

import "../../Assets/Css/Home/Div3Home.css";
import data from "../../Assets/Data/HomeSlider.json";

export default function Div3Home() {



  return (
    
    <div className="Div3Home">
      
      <div className="About container  ">
        <Heading title="Top Courses" text="Browse Our Top Courses"/>
        <div className="cards container flex  justify-center">
          {data.user.map((item,index) => {
          
            return (
              
                <div key={index} className="singleCards">
                  <img src="https://picsum.photos/id/180/600/200" alt="Course img" />
                  <div>
                    <h5>{item.online} Online Courses </h5>
                    <h2>{item.Course}</h2>
                    <div className="flex">
                      <img src={Prof} alt="" />
                      <h5> {item.lessons} Lessons</h5>
                      <h5>Price {item.price} </h5>
                    </div>
                  </div>
                </div>
              
            );
          })}
        </div>
        <div className="button container justify-center" >
          <Button look="dark" title="Read More"/>
        </div>
      </div>
      
    </div>
  );
}
