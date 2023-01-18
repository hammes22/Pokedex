import React from "react";
import axios from "axios";
export default function useRequest() {
  const [response, setResponse] = React.useState({});
  const [error, setError] = React.useState({});
  const [onLoad, setOnload] = React.useState(false);
  const request = async (url, body = {}, heard = {}, method) => {
    setOnload(true);
    try {
      const res = await axios[method](url, body, heard);
      setResponse(res.data);
      setOnload(false);
    } catch (error) {
      setOnload(false);
      setError(error.data);
    }
  };

  return { response, error, onLoad, request };
}
