import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import "../AcrylicsList/acrylics.css";

const AcrylicList = ({ acrylics }) => {
  return (
    <Container>
      <Row className=" justify-space-around ">
        <span className="acrylics">Acrylic Nails</span>
      </Row>
      <Row className="align-content-center justify-space-around ">
        {acrylics &&
          acrylics.map((acrylic) => (
            <Card key={acrylic._id} className="acrylicCard">
              {/* name of acrylic */}
              <Card.Title
                style={{
                  fontSize: "20px",
                }}
              >
                {acrylic.name}
              </Card.Title>
              {/* description of acrylic */}
              <Card.Body
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                  marginLeft: "30px",
                }}
              >
                ${acrylic.price}
              </Card.Body>
              <Card.Footer>
                <Button>
                  <i
                    style={{ fontSize: "15px", marginTop: "10px" }}
                    className="fa-solid fa-cart-plus"
                  ></i>
                </Button>
              </Card.Footer>
            </Card>
          ))}
      </Row>
    </Container>
  );
};

export default AcrylicList;
