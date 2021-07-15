import React from "react";
import Heading from "../../Component/Heading.jsx";
import "../../Assets/Css/Courses/Div1Courses.css";
import "../../Assets/Css/Common.css";
import data from "../../Assets/Data/HomeSlider.json";
import Img1 from "../../Assets/Images/Courses/img-1.jpg"
import Img2 from "../../Assets/Images/Courses/img-2.jpg"
import Img3 from "../../Assets/Images/Courses/img-3.jpg"
import Img4 from "../../Assets/Images/Courses/img-4.jpg"
import Img5 from "../../Assets/Images/Courses/img-5.jpg"
import Img6 from "../../Assets/Images/Courses/img-6.jpg"
import Img7 from "../../Assets/Images/Courses/img-7.jpg"
import Img8 from "../../Assets/Images/Courses/img-8.jpg"
import Img0 from "../../Assets/Images/Courses/img-0.jpg"

export default function Div1Courses() {
  const Images=[Img0,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8]

  return (
    <div className="Div1Courses">
      <div className="container">
        <Heading title="Top Courses" text="Popular Courses" />
        <div className="cards justify-center">
          {data.courses.map((item, index) => {
            
            return (
              <div key={index} className="singleCard">
                <img src={Images[index]} alt="" />
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
