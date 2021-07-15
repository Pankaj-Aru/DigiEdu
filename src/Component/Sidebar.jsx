import React from "react";
import "../Assets/Css/Sidebar.css";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Images/icons/Com-Logo-Name.svg";
import logo1 from "../Assets/Images/icons/Home.svg";
import logo2 from "../Assets/Images/icons/About.svg";
import logo3 from "../Assets/Images/icons/Courses.svg";
import logo4 from "../Assets/Images/icons/Pages.svg";
import logo5 from "../Assets/Images/icons/Contact.svg";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="background ">
        
        <div className="nav">
          <NavLink exact to="/" activeClassName="active">
            <img src={logo1} alt="" />
            <h3>Home</h3>
          </NavLink>
          <NavLink to="/About" activeClassName="active">
            <img src={logo2} alt="" />
            <h3>About</h3>{" "}
          </NavLink>
          <NavLink to="/Courses" activeClassName="active">
            <img src={logo3} alt="" /> <h3>Courses</h3>
          </NavLink>  
          <NavLink to="/Blogs" activeClassName="active">
            <img src={logo4} alt="" />
            <h3>Blogs</h3>
          </NavLink>
          <NavLink to="/ContactUs" activeClassName="active">
            <img src={logo5} alt="" />
            <h3>Contact Us</h3>
          </NavLink>
        </div>
        <hr />
        <div className="data">
          <h2>DigiEducation</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consectetur voluptatem asperiores excepturi a voluptatum mollitia
              dignissimos fuga aspernatur saepe labore magni omnis, neque quam
              tempore. Voluptatibus, quo aperiam.
            </p>
          </div>
        </div>

        <div className="contact">
          <h2>Contact Info</h2>

          <div>
            <h4>Address :</h4>
            <p>Digital ,54 Silver Avenue ,NY-21,Bilvasa</p>
          </div>
          <div>
            <h4>Phone :</h4>
            <p>+91 9521414141</p>
          </div>
          <div>
            <h4>Email :</h4>
            <p>Digital@portfolio.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
