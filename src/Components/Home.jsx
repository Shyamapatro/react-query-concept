import React from "react";
import { useApi } from "./Hook/useApi";
const Home = () => {
  const [dataFact, factLoading, factError, refetchFact] = useApi(
    "https://catfact.ninja/fact",
    "fact"
  );
  const [dataImg, ImgLoading, ImgError, refetchImg] = useApi(
    "https://dog.ceo/api/breeds/image/random",
    "img"
  );

  if (factLoading || ImgLoading) {
    return <h1>Data is Loading </h1>;
  }
  if (factError || ImgError) {
    return <h1>somthing is wrong with api </h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <img src={dataImg?.message} alt="" width={200} height={200} />
        <button onClick={refetchImg}> Fetch Image </button>
      </div>
      <div>
        <h1>{dataFact?.fact}</h1>
        <button onClick={refetchFact}> Fetch Data </button>
      </div>
    </div>
  );
};

export default Home;

//
