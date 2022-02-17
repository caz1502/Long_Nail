import React from "react";

// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";
import ShapeList from "../components/ShapeList/index.js";

// Import the query we are going to execute from its file
import { QUERY_ALL_SHAPE } from "../utils/queries";

const Shape = () => {
  // Execute the query on component load
  const { data } = useQuery(QUERY_ALL_SHAPE);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const shapes = data?.shapes || [];

  return (
    <div>
      <ShapeList shapes={shapes} />
    </div>
  );
};

export default Shape;
