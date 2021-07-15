import React, { useEffect, useState } from "react";
import "../../Assets/Css/Login/Login.css"


export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    id: "",
    phone: "",
  });
  const [newUSer, setnewUSer] = useState(1);

  function HandleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  function saveUser(e) {
    e.preventDefault();

    // setnewUSer([...newUSer, user]);
    setUser({
      name: "",
      email: "",
      id: "",
      phone: "",
    });

    
  }

  //console.log(newUSer);

  return (
    <div className="container">
        <div className="login">
        <form onSubmit={saveUser}>
      <h2>Add User</h2>
      <div className="input">
      <input
        autoComplete="off"
        type="text"
        placeholder="Full Name"
        name="name"
        onChange={HandleChange}
        value={user.name}
      />
      <input
        autoComplete="off"
        type="text"
        placeholder="Email"
        name="email"
        onChange={HandleChange}
        value={user.email}
      />
      <input
        autoComplete="off"
        type="text"
        placeholder="Phone Number"
        name="phone"
        onChange={HandleChange}
        value={user.phone}
      />
      <input
        autoComplete="off"
        type="text"
        placeholder="Id"
        name="id"
        onChange={HandleChange}
        value={user.id}
      />
</div>      <button type="submit">Register</button>
    </form>
        </div>
    </div>
  );
}
