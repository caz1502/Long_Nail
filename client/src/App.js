import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Relaxation from "./pages/Relaxation";
import Acrylic from "./pages/Acrylic";
import Shape from "./pages/Shape";
import Colour from "./pages/Colour";
import Rateus from "./pages/Rateus";
import Basket from "./pages/Basket"
import Waxing from "./pages/Waxing";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>

            {/* <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route> */}
          </div>
          <div>
            <Route exact path="/services">
              <Services />
            </Route>
          </div>
          <div>
            <Route exact path="/waxing">
              <Waxing />
            </Route>
          </div>
          <div>
            <Route exact path="/acrylic">
              <Acrylic />
            </Route>
          </div>
          <div>
            <Route exact path="/relaxation">
              <Relaxation />
            </Route>
          </div>
          <div>
            <Route exact path="/shape">
              <Shape />
            </Route>
          </div>
          <div>
            <Route exact path="/colour">
              <Colour />
            </Route>
          </div>
          <div>
            <Route exact path="/basket">
              <Basket />
            </Route>
          </div>
          <div>
            <Route exact path="/rateus">
              <Rateus />
            </Route>
          </div>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
