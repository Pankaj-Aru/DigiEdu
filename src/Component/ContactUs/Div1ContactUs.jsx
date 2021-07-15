import React from "react";
import Heading from "../Heading.jsx";
import "../../Assets/Css/ContactUs/Div1ContactUs.css";
import Phone from "../../Assets/Images/icons/Phone.svg";
import Email from "../../Assets/Images/icons/Email.svg";
import Gps from "../../Assets/Images/icons/Gps.svg";
export default function Div1ContactUs() {
  return (
    <div className="Div1ContactUs">
      <div className="container">
        <Heading title="Find Us" text="Additional Information" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor vel obcaecati quos rerum magni voluptatibus, illo hic soluta iure cupiditate distinctio architecto perferendis expedita, repudiandae eveniet fuga doloremque aut!</p>
        <div className="cards flex">
          <div>
            <img src={Phone} alt="" />
          </div>
          <div >
            <h2>Phone No.</h2>
            <h3>+91 15236987412</h3>
          </div>
        </div>
        <div className="cards flex">
          <div>
            <img src={Email} alt="" />
          </div>
          <div>
            <h2>Email Adress</h2>
            <h3>Digiedu@portfolio.com</h3>
          </div>{" "}
        </div>
        <div className="cards flex">
          <div>
            <img src={Gps} alt="" />
          </div>{" "}
          <div>
            <h2>Address</h2>
            <h3>
             DigiEdu, Akshya Nagar 1st Block 1st Cross, Rammurthy square,54 Silver Avenue ,NY-21,Bilvasa 
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
