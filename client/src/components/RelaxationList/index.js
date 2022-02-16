import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const RelaxationList = ({ relaxations}) => {
  return (
    <Row>
      <Col>
        {relaxations &&
          relaxations.map((relaxation) => (
            <Card key={relaxation._id}>
              {/* name of service */}
              <Card.Title>
                <h1>{relaxation.name}</h1>
              </Card.Title>
              {/* description of service */}
              <Card.Text>
                <p>{relaxation.price}</p>
              </Card.Text>
            </Card>
          ))}
      </Col>
    </Row>
  );
};

export default RelaxationList;
