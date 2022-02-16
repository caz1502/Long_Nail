import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ServiceList = ({ services }) => {
 
  return (
    <Row>
      <Col>
        {services &&
          services.map((service) => (
            <Card key={service._id}>
              {/* name of service */}
              <Card.Title>
                <h1>{service.name}</h1>
              </Card.Title>
              {/* description of service */}
              <Card.Text>
                <p>{service.description}</p>
              </Card.Text>
            </Card>
          ))}
      </Col>
    </Row>
  );
};

export default ServiceList;
