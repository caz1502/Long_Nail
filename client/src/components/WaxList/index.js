import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import "../WaxList/wax.css";

const WaxList = ({ waxings }) => {
  return (
    <Container>
      <Row className="justify-space-around">
        <span className="waxing">Waxing</span>
      </Row>
      <Row className="align-content-center justify-space-around ">
        {waxings &&
          waxings.map((waxing) => (
            <Card key={waxing._id} className="waxingCard">
              {/* name of service */}
              <Card.Title
                style={{
                  fontSize: "20px",
                }}
              >
                {waxing.name}
              </Card.Title>
              {/* price of service */}
              <Card.Body
                style={{
                  fontSize: "20px",
                  textAlign: "left",
                  marginLeft: "30px",
                }}
              >
                {" "}
                ${waxing.price}
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

export default WaxList;
