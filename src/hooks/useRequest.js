import React from "react";
import axios from "axios";
export default function useRequest(inicialStateResponse) {
  const [response, setResponse] = React.useState(inicialStateResponse);
  const [error, setError] = React.useState();
  const [onLoad, setOnload] = React.useState(false);

  const request = async (url, body, heard, method) => {
    setOnload(true);
    try {
      const res = await axios[method](url, body, heard);
      setResponse({
        ...response,
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
