import React from "react";
import Services from "./Services";
import Acrylic from "./Acrylic";
import Relaxation from "./Relaxation";



const Home = () => {
  return (
    <main>
      <div className="flex-column justify-flex-start min-100-vh">
        <h1>Welcome to Long or Short Nails</h1>
        {/* here is the link to services page */}
        <Services />
        <Acrylic />
        <Relaxation />
      </div>
    </main>
  );
};

export default Home;
