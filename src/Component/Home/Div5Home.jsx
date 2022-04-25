import React from "react";
import data from "../../Assets/Data/HomeSlider.json";

import "../../Assets/Css/Home/Div5Home.css";
import Img1 from "../../Assets/Images/Followers/img-1.svg"
import Img2 from "../../Assets/Images/Followers/img-2.svg"
import Img3 from "../../Assets/Images/Followers/img-3.svg"
import Img0 from "../../Assets/Images/Followers/img-0.svg"


export default function Div5Home() {

const Image=[Img1,Img2,Img3,Img0]

  
  return (
    <div className="Div5Home ">
      
    
     <div className="cards justify-center container">

     {data.followers.map((item,index) => {
       
      
          return (
             
            <div key={index} className="singleCard">
              <img src={Image[index]} alt="" />
              <h2 className="counter">{item.count}</h2>
              <h4>{item.parameter} </h4>
            </div>
          
        );
      })}


     </div>
    </div>
  );
}
