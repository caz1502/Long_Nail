import React from "react";
import "./home.css";

import {Container } from "react-bootstrap";

import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <Container>
          
          <span className="welcome">Long or Short Nails</span>
        </Container>
      </div>
      <div className="align-content-center justify-space-around ">
        <h6 style={{ textAlign: "center" }}>Our Services</h6>
        <Services />
        
      </div>
    </div>
  );
};

export default Home;
