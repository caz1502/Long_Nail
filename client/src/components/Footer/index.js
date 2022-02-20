import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import moment from "moment";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-3">
      <div className="container text-center mb-3">
        {location.pathname !== "/" && (
          <button
            className="btn btn-light mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}

        <h6> ⋆★⋆★⋆★⋆ Thank you for visiting ⋆★⋆★⋆★⋆</h6>
        <div>
          <p> {moment().format("MMMM Do YYYY")} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
