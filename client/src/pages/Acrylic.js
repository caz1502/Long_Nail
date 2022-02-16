import React from "react";
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";
// Import the query we are going to execute from its file
import { QUERY_ALL_ACRYLIC } from "../utils/queries";
import AcrylicsList from "../components/AcrylicsList/index.js";

const Acrylic = () => {
  // Execute the query on component load
  const { data } = useQuery(QUERY_ALL_ACRYLIC);
  const acrylics = data?.acrylics || [];

  console.log(acrylics);

  return (
    <div>
      This is acrylics page, here for testing only as it should be on its own
      page but is when i click on acrylic the page is blank
      <AcrylicsList acrylics={acrylics} />
    </div>
  );
};

export default Acrylic;
