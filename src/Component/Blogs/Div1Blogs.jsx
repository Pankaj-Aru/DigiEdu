import React from "react";
import "../../Assets/Css/Blogs/Div1Blogs.css";
import Heading from "../Heading.jsx";
import data from "../../Assets/Data/Blogs.json";
import date from "../../Assets/Images/icons/date.svg";
import profile from "../../Assets/Images/icons/Profile.svg";
import comments from "../../Assets/Images/icons/comments.svg";
import location from "../../Assets/Images/icons/location.svg";
import arrow from "../../Assets/Images/icons/arrow.svg";
import Img1 from "../../Assets/Images/Courses/img-1.jpg";
import Img2 from "../../Assets/Images/Courses/img-2.jpg";
import Img3 from "../../Assets/Images/Courses/img-3.jpg";
import Img4 from "../../Assets/Images/Courses/img-4.jpg";
import Img5 from "../../Assets/Images/Courses/img-5.jpg";
import Img6 from "../../Assets/Images/Courses/img-6.jpg";
import Img7 from "../../Assets/Images/Courses/img-7.jpg";
import Img8 from "../../Assets/Images/Courses/img-8.jpg";
import Img0 from "../../Assets/Images/Courses/img-0.jpg";

export default function Div1Blogs() {
  const Image = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img0];

  return (
    <div className="Div1Blogs">
      <div className="container">
        <Heading title="Our Blogs" text="Take A Look to Our Blogs" />
        <div className="cards items-center justify-center">
          {data.map((item, index) => {
            return(
            <div key={index} className="singleCard">
              <img src={Image[index]} alt="" />{" "}
              <div className="card-details">
                <h1>{item.title}</h1>
                <div>
                  <div>
                    <img src={date} alt="" />
                    {item.date}
                  </div>
                  <div>
                    <img src={profile} alt="" />
                    {item.name}
                  </div>
                  <div>
                    <img src={location} alt="" />
                    {item.location}
                  </div>
                  <div>
                    <img src={comments} alt="" />
                    {item.comments}
                  </div>
                </div>

                <input className="arrow" type="image" src={arrow} alt="" />

                <p>{item.blog}</p>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}
