import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";

import "../Assets/Css/App.css";
import "../Assets/Css/Common.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer"

import Home from "./Routing/Home.jsx";
import About from "./Routing/About.jsx";
import Courses from "./Routing/Courses.jsx";
import ContactUs from "./Routing/ContactUs.jsx"
import Login from "./Routing/Login.jsx"
import Menu from "../Assets/Images/icons/menu.svg"
import Close from "../Assets/Images/icons/close.svg"
import Blogs from "./Routing/Blogs"
export default function App() {
  return (
    <BrowserRouter>
    <div className="loader_bg">
      <div className="loader">
        
      </div>

    </div>
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="nav-trigger">
          <img src={Menu} alt="" />
          <img src={Close} alt="" />
        </div>
        <div className="site-content-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Courses" component={Courses} />
            <Route exact path="/Blogs" component={Blogs} />
            <Route exact path="/ContactUs" component={ContactUs} />
            {/* <Route exact path="/Login" component={Login} /> */}

           
          </Switch>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}
