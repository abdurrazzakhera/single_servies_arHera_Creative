import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useServices from "../../../Hooks/useServices";

const CheckOut = () => {
  const { serviceId } = useParams("");
  const [services] = useServices();
  useEffect(() => {
    const match = services.find((service) => service.id == serviceId);
  }, [serviceId, services]);

  return (
    <div>
      <h1>This is ChekOut Our Pakage:{serviceId} </h1>
      {/* <form>
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
          <label for='birthday'>Check Out </label>
          <input type='date' id='birthday' name='birthday' />
        </div>
      </form> */}
      <Button>ChekOut</Button>
    </div>
  );
};

export default CheckOut;
