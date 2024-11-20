import { useState, useEffect } from "react";

import axios from "axios";
import { Navigate } from "react-router-dom";

const useApi = (name = "") => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = name
          ? await axios.get(`http://localhost:5001/dogs?name=${name}`)
          : await axios.get("http://localhost:5001/dogs");
        //   console.log(res);
        setResponse(res.data);
        setError(false);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();
  }, [name]);
  if (error) {
    return { response: null, redirect: <Navigate to="/dogs" /> };
  }
  console.log(response);
  console.log(error);
  return { response };
};

export default useApi;
