import React from "react";
import Announcement from "../components/Announcement";
import Navba from "../components/Navba";
import './Login.css'

const Login = () => {
  return (
    <div>
      <Announcement />
      <Navba />
      <div className="sign">
        <div className="signin">
          Email
          <input type="text" />
          Password
          <input type="password" />
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
