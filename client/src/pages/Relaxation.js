import React from "react";

// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";
import RelaxationList from "../components/RelaxationList";

// Import the query we are going to execute from its file
import { QUERY_ALL_RELAXATION } from "../utils/queries";

const Relaxation = () => {
  // Execute the query on component load
  const { data } = useQuery(QUERY_ALL_RELAXATION);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const relaxations = data?.relaxations || [];

  return (
    <main>
      <div>
        this is the relaxtion list but wont render on its own page
        <RelaxationList relaxations={relaxations} />
      </div>
     
    </main>
  );
};

export default Relaxation;
