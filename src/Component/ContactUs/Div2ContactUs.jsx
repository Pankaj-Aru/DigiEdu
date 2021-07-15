import React,{useState} from "react";
import Heading from "../Heading.jsx";
import "../../Assets/Css/ContactUs/Div2ContactUs.css";
import Button from "../Buttons.jsx"

export default function Div2ContactUs() {
const [user, setUser] = useState({
  fullName:'',
  email:'',
  subject:'',
  message:''
})


const UserData=(e)=>{
e.preventDefault();
const Name=e.target.name;
const Value=e.target.value
setUser({...user,[Name]:Value})
console.log(Value,Name)
}

const submitForm=()=>{
  console.log("form submited")
  alert("form submited")
}

  return (
    <div className="Div2ContactUs">
      <div className="container">
        <Heading title="Contact Us" text="Fill Out The Form" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor vel obcaecati quos rerum magni voluptatibus, illo hic soluta iure cupiditate distinctio architecto perferendis expedita, repudiandae eveniet fuga doloremque aut!</p>

        <form className="form" onSubmit={submitForm} >
          <input  name="fullName"   type="text"   placeholder="Full Name"   onChange={UserData}  value={user.name}/>
          <input  name="email"  type="email"  placeholder="Email"   onChange={UserData}  value={user.email}/>
          <input  name="subject"  type="text"   placeholder="Subject"  onChange={UserData}  value={user.subject}/>
          <textarea  name="message" type="text"   placeholder="Message"  onChange={UserData}  value={user.message}/>
          </form>
          <Button onclick={submitForm} title="Send Message" look="dark"/>
          <div className="map">
                        <iframe title="Company Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45012861438!2d-115.31508258571672!3d36.124918453865035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sru!4v1580850940897!5m2!1sen!2sru"
                            width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                    </div>
      </div>
    </div>
  );
}
