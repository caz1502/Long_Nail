import React from "react";
import { Card, Row } from "react-bootstrap";
import "../ColourList/colour.css";

const ColourList = ({ colours }) => {
  return (
    <Row className="align-content-center justify-space-around ">
      {colours&&
        colours.map((colour) => (
          <Card key={colour._id} className="colourCard">
            <img src={colour.image} alt="" className="colourImage" />
          </Card>
        ))}
    </Row>
  );
};

export default ColourList;
