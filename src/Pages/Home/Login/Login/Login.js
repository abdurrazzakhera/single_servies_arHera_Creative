import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Your Accout</h1>
      <p>
        If Your have No An Acoout ?<Link to='/signup'>Please SignUp</Link>
      </p>
    </div>
  );
};

export default Login;
