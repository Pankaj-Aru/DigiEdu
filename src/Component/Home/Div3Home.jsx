import React from "react";
import Button from "../Buttons"
import Heading from "../Heading.jsx"
import Img1 from "../../Assets/Images/Courses/img-1.jpg"
import Img2 from "../../Assets/Images/Courses/img-2.jpg"
import Img3 from "../../Assets/Images/Courses/img-3.jpg"
import Img4 from "../../Assets/Images/Courses/img-4.jpg"
import Img5 from "../../Assets/Images/Courses/img-5.jpg"
import Img6 from "../../Assets/Images/Courses/img-6.jpg"
import Img7 from "../../Assets/Images/Courses/img-7.jpg"
import Img8 from "../../Assets/Images/Courses/img-8.jpg"
import Img0 from "../../Assets/Images/Courses/img-0.jpg"
import Prof from "../../Assets/Images/profile/Prof.png"

import "../../Assets/Css/Home/Div3Home.css";
import data from "../../Assets/Data/HomeSlider.json";

export default function Div3Home() {

const Image=[Img0,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8]

  return (
    
    <div className="Div3Home">
      
      <div className="About container  ">
        <Heading title="Top Courses" text="Browse Our Top Courses"/>
        <div className="cards container flex  justify-center">
          {data.user.map((item,index) => {
          
            return (
              
                <div key={index} className="singleCards">
                  <img src={Image[index]} alt="Course img" />
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
