import React from "react";
import { Card, Row} from "react-bootstrap";
import "../ServiceList/service.css";

const ServiceList = ({ services }) => {
  return (
    <Row className="align-content-center justify-space-around ">
      {services &&
        services.map((service) => (
          <Card key={service._id}>
            {/* <img src={service.image} alt="pic" /> */}
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
