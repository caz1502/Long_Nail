import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const AcrylicList = ({ acrylics }) =>{

  return (
    <Row>
      <Col>
        {acrylics &&
          acrylics.map((acrylic) => (
            <Card key={acrylic._id}>
              {/* name of service */}
              <Card.Title>
                <h1>{acrylic.name}</h1>
              </Card.Title>
              {/* description of service */}
              <Card.Text>
                <p>{acrylic.price}</p>
              </Card.Text>
            </Card>
          ))}
      </Col>
    </Row>
  );
};

export default AcrylicList;
