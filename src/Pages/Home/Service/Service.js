import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, duration, packageincludes, image } = service;
  const navigate = useNavigate();

  const handleCheckOut = (id) => {
    navigate(`/${id}`);
  };
  return (
    <Col>
      <Card style={{ height: "750px" }}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> Duration : {duration}</Card.Text>
          <ListGroup className='list-group-flush'>
            {packageincludes.map((pakage) => (
              <ListGroupItem>
                <li>{pakage} </li>
              </ListGroupItem>
            ))}
          </ListGroup>
          <Card.Text> Price : {price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <button
            onClick={() => handleCheckOut(id)}
            className='btn btn-secondary w-100'
          >
            Check Out
          </button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
