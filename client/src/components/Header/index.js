import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Auth from "../../auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="av-container text-light flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center ">
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              {/* login button to take you to login */}
              {/* <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link> */}
              {/* sign up button  */}
              {/* <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link> */}
              {/* home link */}
              <Link className="btn m-2 " to="/">
                Home
              </Link>
              <Link className="btn m-2" to="/relaxation">
                Relaxation
              </Link>
              <Link className="btn m-2" to="/waxing">
                Waxing
              </Link>
              <Link className="btn m-2 " to="/acrylic">
                Acrylics
              </Link>
              {/* <Link className="btn btn-lg btn-light m-2" to="/services">
                Services
              </Link> */}
              <Link className="btn m-2" to="/shape">
                Nail Shape
              </Link>
              <Link className="btn m-2" to="/colour">
                Colours
              </Link>
              <Link className="btn m-2" to="/rateus">
                Rate Us
              </Link>
              <Link className="btn m-2" to="/basket">
                <i className="fa-solid fa-cart-plus"></i>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
