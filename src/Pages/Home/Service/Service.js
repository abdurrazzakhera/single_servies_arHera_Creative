import React from "react";

const Service = ({ service }) => {
  const { name, price, duration, packageincludes } = service;
  return (
    <div>
      <h1>Name : {name}</h1>
      <p>Price : {price}</p>
      <span>Duration : {duration}</span>
      {packageincludes.map((pakege) => (
        <li>{pakege}</li>
      ))}
      <div>
        <button className='btn btn-secondary'>Check Out</button>
      </div>
    </div>
  );
};

export default Service;
