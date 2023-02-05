import React, { useEffect, useState } from "react";
import axios from "axios";
import { addValueToKeyRequestPokemon } from "../utils/ReturnRequestPokemon";
import { BASE_URL } from "../constants/apiConstants";
import {
  addValueToKeyRequestList,
  initialKeysRequestList,
} from "../utils/ReturnRequestKeysList";


export default function useRequestPokemon() {
  const urlInicial = `${BASE_URL}?limit=${21}}&offset=${0}`;
  const [pokemonList, setPokemonList] = useState(initialKeysRequestList);
  const [pokemons, setPokemons] = React.useState([]);
  const [error, setError] = useState();
  const [onLoad, setOnload] = useState(false);

  useEffect(() => {
    requestPokemon(urlInicial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestPokemon = async (url) => {
    setOnload(true);
    const res = await axios.get(url);
    setPokemonList(addValueToKeyRequestList(res));
    getPokemon(res.data.results);
    setOnload(false);
  };

  const getPokemon = (results) => {
    setOnload(true);
    const promisesArray = results.map((item) => {
      return axios.get(item.url);
    });

    Promise.all(promisesArray)
      .then((res) => {
        
        setPokemons( 
          res.map((item) => {
            return addValueToKeyRequestPokemon(item);
          })
        );
      })
      .catch((error) => {
        setError(error);
      });

    setOnload(false);
  };

  return { pokemons, pokemonList, requestPokemon, getPokemon, onLoad, error };
}
