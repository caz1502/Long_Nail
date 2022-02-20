import React from "react";

// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";
import ColourList from "../components/ColourList/index.js";

// Import the query we are going to execute from its file
import { QUERY_ALL_COLOUR } from "../utils/queries";

const Colour = () => {
  // Execute the query on component load
  const { data } = useQuery(QUERY_ALL_COLOUR);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const colours = data?.colours || [];

  return (
    <div>
      <ColourList colours={colours} />
    </div>
  );
};

export default Colour;
