import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useApi from "./hooks/useApi";

const Dog = () => {
  const { name } = useParams();
  console.log(name);

  const { response } = useApi(name);
  console.log(`RESPONSE:`);
  console.log(response);

  if (!response) return <p>Loading...</p>;
  return (
    <div>
      <h1>{response[0].name}</h1>
      <img
        src={response[0].src}
        alt={response[0].name}
        style={{ width: "200px" }}
      />
      {response[0].facts.map((fact) => {
        return <h3>{fact}</h3>;
      })}
    </div>
  );
};

export default Dog;
