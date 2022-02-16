import React from "react";

// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";
import AcrylicsList from "../components/AcrylicsList";

// Import the query we are going to execute from its file
import { QUERY_ALL_ACRYLIC } from "../utils/queries";

const Acrylic = () => {
  // Execute the query on component load
  const { data } = useQuery(QUERY_ALL_ACRYLIC);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const acrylics = data?.acrylics || [];

  return (
    <main>
      This is acrylics page, here for testing only as it should be on its own page but is when i click on acrylic the page is blank
      <AcrylicsList acrylics={acrylics} />
     
    </main>
  );
};

export default Acrylic;
