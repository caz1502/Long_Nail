import React from "react";
import "./home.css";

import {Container } from "react-bootstrap";

import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <Container >
          <h4>
           Welcome to
          </h4>
          <span className="welcome">Long or Short Nails</span>
        </Container>
      </div>
      <div className="align-content-center justify-space-around ">
        <Services />
      </div>
    </div>
  );
};

export default Home;
