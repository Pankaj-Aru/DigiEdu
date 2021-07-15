import React from "react";
import {NavLink} from "react-router-dom"
import "../Assets/Css/Common.css";
import "../Assets/Css/Navbar.css";
import Logo from "../Assets/Images/icons/Com-Logo-Name.svg"
import login from "../Assets/Images/icons/close.svg"

export default function Navbar() {
  return (
    <>
      <section className="Navbar container " >
           <img href="/" src={Logo} alt="" />
          <div className="navbar sidebar">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/About" activeClassName="active">About</NavLink>
            <NavLink to="/Courses" activeClassName="active">Courses</NavLink>
            <NavLink to="/Blogs" activeClassName="active">Blogs</NavLink>
            <NavLink to="/ContactUs" activeClassName="active">Contact Us</NavLink>
            {/* <NavLink to="/Login" activeClassName="active"><img src={login} alt="" /></NavLink> */}

        
        </div>
      </section>
    </>
  );
}
