import { useState, useEffect } from "react";

const useFetch = (url) => {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setIsPending(true);
        try {
          const response = await fetch(url);
          if (!response.ok)
            throw new Error("Api is not found ERROR : " + response.status);
          const data = await response.json();
          setData(data);
          setIsPending(false);
          setError(null);
        } catch (error) {
          setError(error.message);
          setIsPending(false);
        }
      };

      fetchData();
    }, 200);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
