import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up Your Account</h2>
      <p>
        If Your have already An Acoout ?<Link to='/login'>Please Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
