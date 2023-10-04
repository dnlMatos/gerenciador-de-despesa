import React from "react";
import "./index.css";
import user from "../../../images/user_456141.png";
import exit from "../../../images/logout_1828407.png"

export default function User() {
  return (
    <div className="user">
      <img src={user} className="userImg"/>
      <div className="name">User Name</div>
      <img className="exit" src={exit}/>
    </div>
  );
}
