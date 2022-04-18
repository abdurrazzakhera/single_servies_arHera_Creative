import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  //email, password ref;
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  //react firebase hook auth
  //Google
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //Send password varification
  const [sendPasswordResetEmail, sending, emailResteError] =
    useSendPasswordResetEmail(auth);

  //SingUp function
  const handelSingIN = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  let errorElementEmail;
  if (error) {
    errorElementEmail = <p className='text-danger'>Error : {error?.message}</p>;
  }

  //Google Sign Up\

  if (!user) {
    const errorMassage = error?.message;
    console.log(errorMassage);
  }

  if (user) {
    navigate(from, { replace: true });
  }
  //Reset Passwor link
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  //Return the Function.
  return (
    <div className='d-block w-50 mx-auto  mt-5 rounded p-3'>
      <SocialLogin></SocialLogin>
      {errorElementEmail}
      <div className='form-container  '>
        <form onSubmit={handelSingIN}>
          <div>
            <label htmlFor='email'>Email :</label>
            <input
              ref={emailRef}
              type='email'
              name='email'
              id=''
              placeholder='Enter Your Email'
              required
            />
          </div>
          <div>
            <label htmlFor='Password'>Password :</label>
            <input
              ref={passwordRef}
              type='password'
              name=''
              id=''
              placeholder='Enter Your Password'
              required
            />
          </div>
          <p>{loading}</p>
          <div>
            <input type='submit' value='Log In' />
          </div>
        </form>
      </div>
      <p className='fs-5'>
        Don't have an account?
        <Link className='text-decoration-none' to='/signup'>
          {" "}
          Sing Up
        </Link>
      </p>
      <p className='fs-5'>
        Forget Your Password?
        <button
          className='btn btn-link text-primary pe-auto text-decoration-none'
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
