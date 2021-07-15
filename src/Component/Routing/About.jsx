import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import Div1Common from "../Div1Common"
import Div1About from "../../Component/AboutUs/Div1About";
import Div2About from "../../Component/AboutUs/Div2About";
import Div3About from "../../Component/AboutUs/Div3About";
import Div4About from "../../Component/AboutUs/Div4About";
import Div5About from "../../Component/AboutUs/Div5About";

export default function Home() {
  return (

<>
<Div1Common/>
<Div1About/>
<Div2About/>
<Div3About/>
<Div4About/>
<Div5About/>
</>

    // <BrowserRouter>
    //   <Route exact path="/About" component={Div1Common} />

    //   <Route exact path="/About" component={Div1About} />
    //   <Route exact path="/About" component={Div2About} />
    //   <Route exact path="/About" component={Div3About} />
    //   <Route exact path="/About" component={Div4About} />
    //   <Route exact path="/About" component={Div5About} />
    // </BrowserRouter>
  );
}
