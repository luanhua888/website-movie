import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <div className="flex justify-end  gap-1">
      <button className="btn">
        <Link to="/login">login</Link>
      </button>
      <button className="btn">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}

export default LoginButton;
