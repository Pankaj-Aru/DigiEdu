import React from "react";
import Heading from "../../Component/Heading.jsx";
import "../../Assets/Css/Courses/Div1Courses.css";
import "../../Assets/Css/Common.css";
import data from "../../Assets/Data/HomeSlider.json";



export default function Div1Courses() {
 

  return (
    <div className="Div1Courses">
      <div className="container">
        <Heading title="Top Courses" text="Popular Courses" />
        <div className="cards justify-center">
          {data.courses.map((item, index) => {
            
            return (
              <div key={index} className="singleCard">
                <img src="https://picsum.photos/id/188/20/20" alt="" />
                <div className="data">
                  <h4>{item.price}</h4>
                  <h2>{item.Course}</h2>
                  <div className="flex">
                    <h5>{item.lessons} Lessons</h5>
                    <h5>{item.student} Student</h5>
                  </div>
                  <p>
                    Details: <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Soluta veritatis cumque eum magnam dolores consectetur
                    quaerat alias blanditiis autem itaque. Ipsum saepe
                    necessitatibus natus distinctio fuga dignissimos dolorum
                    possimus illo.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
