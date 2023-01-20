import React from "react";
import axios from "axios";
export default function useRequestList() {
  const [response, setResponse] = React.useState({
    count: "",
    next: "",
    previous: "",
    results: [],
  });
  const [error, setError] = React.useState();
  const [onLoad, setOnload] = React.useState(false);
  const request = async (url) => {
    setOnload(true);
    try {
      const res = await axios.get(url);
      setResponse({
        count: res.data.count,
        next: res.data.next,
        previous: res.data.previous,
        results: res.data.results,
      });
      setOnload(false);
    } catch (error) {
      setError(error);
      setOnload(false);
    }
  };

  return { response, error, onLoad, request };
}
