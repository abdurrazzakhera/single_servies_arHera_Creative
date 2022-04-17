import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <div>
      <h1 className='text-center my-3 text-secondary'>Our Services</h1>
      <Row xs={1} md={3} className='g-4'>
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
