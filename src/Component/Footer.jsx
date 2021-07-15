import React from "react";
import "../Assets/Css/Footer.css";
import { NavLink } from "react-router-dom";
import logo1 from "../Assets/Images/icons/twitter.svg"
import logo2 from "../Assets/Images/icons/facebook.svg"
import logo3 from "../Assets/Images/icons/google.svg"
import logo4 from "../Assets/Images/icons/instagram.svg"

export default function Footer() {
  return (
    <div className="Footer">  
      <div className=" flex justify-center">
        <div>
          <h1>DigiEducation</h1>
          <div className="data">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              consectetur voluptatem asperiores excepturi a voluptatum mollitia
              dignissimos fuga aspernatur saepe labore magni omnis, neque quam
              tempore. Voluptatibus, quo aperiam.
            </p>
          </div>
          <div className="logo flex">
            <div><img src={logo1} alt="" /></div>
            <div><img src={logo2} alt="" /></div>
            <div><img src={logo3} alt="" /></div>
            <div><img src={logo4} alt="" /></div>

          </div>
        </div>
        <div>
          <h3>Usefull Links</h3>
          <div className="datalink"  >
          
         <ul> <NavLink exact to="/" activeClassName="active">Home</NavLink></ul>
         <ul>  <NavLink to="/About" activeClassName="active">About</NavLink></ul>
         <ul> <NavLink to="/Courses" activeClassName="active">Courses</NavLink></ul>
         <ul> <NavLink to="/Blogs" activeClassName="active">Blogs</NavLink></ul>
         <ul> <NavLink to="/ContactUs" activeClassName="active">Contact Us</NavLink></ul>
        
          </div>
        </div>
        <div>
          <h3>More Info</h3>
          <div className="datalink">
            <ul>Profile</ul>
            <ul>Vision and Value</ul>
            <ul>History</ul>
            <ul>LeaderShip</ul>
            <ul>Support</ul>
          </div>
          <div></div>
        </div>
        <div>
          <h3>Contact Info</h3>
          <div className="data adress">
            <div>
              <h4>Address :</h4>
              <h5>Digital ,54 Silver Avenue ,NY-21,Bilvasa</h5>
            </div>
            <div>
              <h4>Phone :</h4>
              <h5>+91 9521414141</h5>
            </div>
            <div>
              <h4>Email :</h4>
              <h5>Digital@portfolio.com</h5>
            </div>
          </div>
        </div>
        <div className="copyright items-center vertical-center">
          <div><h4>@2021 Digital.  All rights reserved.  Designed by <a href="/">Pankaj Aru</a></h4> </div>
 <div className="flex"><h5>Career</h5>
 <h5>Privacy Policy</h5>
 <h5>Contact Us</h5></div>
        </div>
      </div>
      <hr />
    </div>
  );
}
