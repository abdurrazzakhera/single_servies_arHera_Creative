import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  //email, password ref;
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  //react firebase hook auth
  //Google
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  //SingUp function
  const handelSingUp = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
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
    navigate("/");
  }

  //Return the Function.
  return (
    <div className='d-block w-50 mx-auto  mt-5 rounded p-3'>
      <SocialLogin></SocialLogin>
      {errorElementEmail}
      <div className='form-container  '>
        <form onSubmit={handelSingUp}>
          <div>
            <label htmlFor='name'>Name :</label>
            <input ref={nameRef} type='text' placeholder='Your Name' />
          </div>
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
          <p>
            <p>{loading && "loadding ..."}</p>
          </p>
          <div>
            <input type='submit' value='Register' />
          </div>
        </form>
      </div>
      <p className='fs-5'>
        Have an account ?
        <Link className='text-decoration-none' to='/login'>
          {" "}
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
