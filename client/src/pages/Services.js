import React from "react";

// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";
import ServiceList from "../components/ServiceList/index.js";

// Import the query we are going to execute from its file
import { QUERY_ALL_SERVICE } from "../utils/queries";

const Service = () => {
  // Execute the query on component load
  const { data } = useQuery(QUERY_ALL_SERVICE);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const services = data?.services || [];

  return (
    <div>
      <ServiceList services={services} />
    </div>
  );
};

export default Service;
