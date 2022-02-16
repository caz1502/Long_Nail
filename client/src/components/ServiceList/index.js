import React from "react";
import { Card, Container, Row} from "react-bootstrap";
import "../ServiceList/service.css";

const ServiceList = ({ services }) => {
  return (
    <Row className="align-content-center justify-space-between ">
      {services &&
        services.map((service) => (
          <Card key={service._id}>
            {/* name of service */}
            <Card.Title>{service.name}</Card.Title>

            {/* description of service */}
            <Card.Text>{service.description}</Card.Text>
          </Card>
        ))}
    </Row>
  );
};

export default ServiceList;
