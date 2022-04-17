import React from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, duration, packageincludes, image } = service;
  return (
    <Col style={{ height: "700px" }}>
      <Card>
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
          <button className='btn btn-secondary w-100 '>Check Out</button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
