import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["anything"], () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h4>Something is wrong...</h4>
      </div>
    );
  }
  return (
    <div>
      {/* ? is check data is there or not if there is data the fact data is printed on the  */}
      <h1>{data?.fact}</h1>
      <button onClick={refetch}>Fatch API</button>
    </div>
  );
};

export default Home;
