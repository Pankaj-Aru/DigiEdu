import React from 'react'
// import {BrowserRouter,Route} from "react-router-dom"

import Div1Home from "../../Component/Home/Div1Home.jsx";
import Div2Home from "../../Component/Home/Div2Home";
import Div3Home from "../../Component/Home/Div3Home";
import Div4Home from "../../Component/Home/Div4Home";
import Div5Home from "../../Component/Home/Div5Home";
import Div6Home from "../../Component/Home/Div6Home";
import Div7Home from "../../Component/Home/Div7Home";

export default function Home() {
    return (
        <>

<Div1Home/>
<Div2Home/>
<Div3Home/>
<Div4Home/>
<Div5Home/>
<Div6Home/>
<Div7Home/>

            
         {/* <Route exact path="/" component={Div1Home}/>
         <Route exact path="/" component={Div2Home}/>
         <Route exact path="/" component={Div3Home}/>
         <Route exact path="/" component={Div4Home}/>
         <Route exact path="/" component={Div5Home}/>
         <Route exact path="/" component={Div6Home}/>
         <Route exact path="/" component={Div7Home}/> */}

        </>
    )
}
