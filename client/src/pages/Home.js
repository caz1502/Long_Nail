import React from "react";
import Services from "./Services";
import "./home.css";




const Home = () => {
  return (
    <div className="welcome">
      <span className>Welcome to {' '} Long or Short Nails</span>

      {/* here is the link to services page */}
      <Services />

      </div>
  );
};

export default Home;
