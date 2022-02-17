import React from "react";
import { Card, Row } from "react-bootstrap";
import "../ShapeList/shape.css";

const ShapeList = ({ shapes }) => {
  return (
    <Row className="align-content-center justify-space-around ">
      {shapes &&
        shapes.map((shape) => (
          <Card key={shape._id} className="shapeCard">
            <img src={shape.image} alt="" className="shapeImage"/>
          </Card>
        ))}
    </Row>
  );
};

export default ShapeList;
