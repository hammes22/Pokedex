import React from "react";
import axios from "axios";
export default function useRequestPokemon() {
  const [response, setResponse] = React.useState({
    height: "",
    id: "",
    moves: [],
    name: "",
    order: "",
    species: {},
    sprites: {},
    stats: [],
    types: [],
    weight: "",
  });
  const [error, setError] = React.useState();
  const [onLoad, setOnload] = React.useState(false);

  const request = async (url) => {
    setOnload(true);
    try {
      const res = await axios.get(url);
      function type() {
        const t = [];
        if (res.data.types.length === 1) {
          t.push(res.data.types[0].type.name);
        } else {
          t.push(res.data.types[0].type.name);
          t.push(res.data.types[1].type.name);
        }

        return t;
      }
      setResponse({
        ...response,
        height: res.data.height,
        id: res.data.id,
        moves: [
          res.data.moves[0].move,
          res.data.moves[1].move,
          res.data.moves[2].move,
          res.data.moves[3].move,
        ],
        name: res.data.name,
        order: res.data.order,
        species: res.data.species,
        sprites: {
          // official_front_default: res.data.other["official-artwork"].front_default,
          front_default: res.data.sprites.front_default,
          back_default: res.data.sprites.back_default,

          official_front_default:
            res.data.sprites.other["official-artwork"].front_default,
        },
        stats: res.data.stats,
        types: type(),
        weight: res.data.weight,
      });
      setOnload(false);
    } catch (error) {
      setError(error);
      setOnload(false);
    }
  };

  return { response, error, onLoad, request };
}
