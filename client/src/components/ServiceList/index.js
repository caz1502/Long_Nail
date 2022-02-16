import React from "react";
import { Card, Row } from "react-bootstrap";


const ServiceList = ({ services }) => {
 
  return (
    <div>
      <Row>
        
          {services &&
            services.map((service) => (
              <Card key={service._id}>
                {/* name of service */}
                <Card.Title >
                  <h1>{service.name}</h1>
                </Card.Title>
                {/* description of service */}
                <Card.Text>
                  <p>{service.description}</p>
                </Card.Text>
              </Card>
            ))}
      
      </Row>
    </div>
  );
};

export default ServiceList;
