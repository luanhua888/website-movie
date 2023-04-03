import React from "react";
import "./login.css";

function LoginButton() {
  return (
    <div className="flex justify-end  gap-1">
      <button className="btn">
        login
      </button>
      <button className="btn">
        register
      </button>
    </div>
  );
}

export default LoginButton;
