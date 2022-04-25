import React from "react";
import "../../Assets/Css/Blogs/Div1Blogs.css";
import Heading from "../Heading.jsx";
import data from "../../Assets/Data/Blogs.json";
import date from "../../Assets/Images/icons/date.svg";
import profile from "../../Assets/Images/icons/Profile.svg";
import comments from "../../Assets/Images/icons/comments.svg";
import location from "../../Assets/Images/icons/location.svg";
import arrow from "../../Assets/Images/icons/arrow.svg";



export default function Div1Blogs() {


  return (
    <div className="Div1Blogs">
      <div className="container">
        <Heading title="Our Blogs" text="Take A Look to Our Blogs" />
        <div className="cards items-center justify-center">
          {data.map((item, index) => {
            return(
            <div key={index} className="singleCard">
              <img src="https://picsum.photos/id/189/400/500" alt="" />{" "}
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
