import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import "../ColourList/colour.css";

const ColourList = ({ colours }) => {
  return (
    <Container>
      <Row className="justify-space-around">
        <span className="colour">Colours</span>
      </Row>
      <Row className="align-content-center justify-space-around ">
        {colours &&
          colours.map((colour) => (
            <Card key={colour._id} className="colourCard">
              <img src={colour.image} alt="" className="colourImage" />
            </Card>
          ))}
      </Row>
    </Container>
  );
};

export default ColourList;
