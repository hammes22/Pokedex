import React, { useState } from "react";
import { useEffect } from "react";

export default function usePokedex() {
  const [pokedex, setPokedex] = useState([]);
  const addPokedex = (pokemon) => {
    if (pokedex.findIndex((p) => p.id === pokemon.id) === -1) {
      setPokedex([...pokedex, pokemon]);
    }
  };
  const removePokedex = (pokemon, page) => {
    setTimeout(
      () => {
        setPokedex([...pokedex.filter((p) => p.id !== pokemon.id)]);
      },
      page ? 1500 : 0
    );
  };

  const inPokedex = (id) => {
    return pokedex.findIndex((p) => p.id === id) === -1;
  };

  return { pokedex, addPokedex, inPokedex, removePokedex };
}
