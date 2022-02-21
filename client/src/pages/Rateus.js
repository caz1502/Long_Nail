import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";

import "./rateus.css";

const Rateus = () => {
  const [count, setCount] = useState(0);

  return (
    <Container className="how">
      <Row className="justify-space-around">
        <span className="rate">How did we do?</span>
      </Row>
      <Row className="align-content-center justify-space-around ">
        <div style={{fontFamily:"arial"}}>{count}</div>
      </Row>
      <Row className="align-content-center justify-space-around ">
        <div className="button-wrapper ">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            {" "}
            <i style={{ backgroundColor: "red" }} className="far fa-frown"></i>
          </button>

          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {" "}
            <i
              style={{ backgroundColor: "lightgreen" }}
              className="far fa-smile"
            ></i>
          </button>
        </div>
      </Row>
      <Row className="align-content-center justify-space-around ">
        <div>
          <button style={{fontSize:"20px", fontFamily:"arial"}}
            onClick={() => {
              setCount(0);
            }}
          >Reset</button>
        </div>
      </Row>
    </Container>
  );
};

export default Rateus;
