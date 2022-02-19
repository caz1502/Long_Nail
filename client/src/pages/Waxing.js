import React from "react";

// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";
import WaxList from "../components/WaxList/index.js";

// Import the query we are going to execute from its file
import { QUERY_ALL_WAXING } from "../utils/queries";

const Wax = () => {
  // Execute the query on component load
  const { data } = useQuery(QUERY_ALL_WAXING);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const waxings = data?.waxings || [];

  return (
    <div>
      <WaxList waxings={waxings} />
    </div>
  );
};

export default Wax;
