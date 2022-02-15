import React from "react";
import Services from "./Services";

const Home = () => {
  return (
    <main>
      <div className="flex-column justify-flex-start min-100-vh">
        <h1>Welcome to Long or Short Nails</h1>
{/* here is the link to services page */}
        <Services />
      </div>
    </main>
  );
};

export default Home;
