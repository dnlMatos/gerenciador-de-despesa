import React from "react";
import Business from "./Business/Business";
import User from "./User/User";
import './index.css'

export default function Header() {
  return (
    <div className="header">
      <Business />
      <User />
    </div>
  );
}
