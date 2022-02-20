import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import "./rateus.css";

const Rateus = () => {
  const [count, setCount] = useState(0);

  return (
    <Container className="how">
      <Row className="justify-space-around">
        <span className="rate">How did we do?</span>
      </Row>
      <Row className="align-content-center justify-space-around ">
        <div>{count}</div>
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
    </Container>
  );
};

export default Rateus;
