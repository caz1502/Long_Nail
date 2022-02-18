import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import "../ShapeList/shape.css";

const ShapeList = ({ shapes }) => {
  return (
    <Container>
      <Row className="justify-space-around">
        <span className="shape">Nail shapes</span>
      </Row>
      <Row className="align-content-center justify-space-around ">
        {shapes &&
          shapes.map((shape) => (
            <Card key={shape._id} className="shapeCard">
              <img src={shape.image} alt="" className="shapeImage" />
            </Card>
          ))}
      </Row>
    </Container>
  );
};

export default ShapeList;
