// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BASE_URL } from "../constants/apiConstants";
// import {
//   addValueToKeyRequestList,
//   initialKeysRequestList,
// } from "../utils/ReturnRequestKeysList";

// export default function useRequestListPokemon() {
//   const urlInicial = `${BASE_URL}?limit=${21}}&offset=${0}`;
//   const [pokemonList, setPokemonList] = useState(initialKeysRequestList);
//   const [onLoad, setOnload] = useState(false);
//   useEffect(() => {
//     requestPokemon(urlInicial);
//   }, []);

//   const requestPokemon = async (url) => {
//     setOnload(true);
//     const res = await axios.get(url);
//     setPokemonList(addValueToKeyRequestList(res));
//     setOnload(false);
//   };
//   return { pokemonList, requestPokemon };
// }
