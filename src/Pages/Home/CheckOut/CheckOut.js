import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  const { serviceId } = useParams("");
  const navigate = useNavigate();

  const handelBooking = (event) => {
    event.preventDefault();
    navigate("/booking");
  };

  return (
    <div style={{ height: "100vh" }} className='container'>
      <div className='w-50 mx-auto'>
        <h1>Book Your Favorite Pakage </h1>
        <div className='w-75 mx-auto chekOut-form-container'>
          <form>
            <div>
              <label htmlFor=''>Full Name</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>Your Email Address</label>
              <input type='email' />
            </div>
            <div>
              <label htmlFor=''>Your Phone Number</label>
              <input type='number' />
            </div>
            <div>
              <label for='birthday'>Booking Date Picker </label>
              <input type='date' id='birthday' name='birthday' />
            </div>
            <div>
              <input onClick={handelBooking} type='submit' value='CheckOut' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
