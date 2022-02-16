import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";
import Auth from '../../auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="av-container text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Project Name</h1>
          </Link>
         
        </div>
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
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              {/* sign up button  */}
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              {/* home link */}
              <Link className="btn btn-lg btn-light m-2" to="/">
                Home
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/acrylic">
                Acrylics
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/services">
                Services
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/relaxation">
                Relaxation
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
