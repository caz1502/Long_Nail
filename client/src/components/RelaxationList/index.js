import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import "../RelaxationList/relaxation.css";

const RelaxationList = ({ relaxations}) => {
  return (
    <Container>
      <Row className="justify-space-around">
        <span className="relaxation">Relaxation</span>
      </Row>
      <Row className="align-content-center justify-space-around ">
        {relaxations &&
          relaxations.map((relaxation) => (
            <Card key={relaxation._id} className="relaxationCard">
              {/* name of service */}
              <Card.Title>{relaxation.name}</Card.Title>
              {/* price of service */}
              <Card.Body style={{ fontSize: "40px", textAlign: "left",marginLeft:"30px" }}>
                {" "}
                ${relaxation.price}
              </Card.Body>
              <Card.Footer>
                <i
                  style={{ fontSize: "30px", marginTop: "10px" }}
                  className="fa-solid fa-cart-plus"
                ></i>
              </Card.Footer>
            </Card>
          ))}
      </Row>
    </Container>
  );
};

export default RelaxationList;
