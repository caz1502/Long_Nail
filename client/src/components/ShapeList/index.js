import React from "react";
import { Card, Row } from "react-bootstrap";
import "../ShapeList/shape.css";

const ShapeList = ({ shapes }) => {
  return (
    <Row >
      {shapes &&
        shapes.map((shape) => (
          <Card key={shape._id}>
            <Card.Title>{shape.name}</Card.Title>
            <img src={shape.image} alt="" />
          </Card>
        ))}
    </Row>
  );
};

export default ShapeList;
