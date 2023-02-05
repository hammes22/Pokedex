export const initialKeysRequestPokemon = {
  id: "",
  moves: [],
  name: "",
  stats: [],
  types: [],
  sprites: {},
};
export function addValueToKeyRequestPokemon(res) {
  const data = {
    id: res.data.id,
    moves: [
      res.data.moves[0].move.name,
      res.data.moves[1].move.name,
      res.data.moves[2].move.name,
      res.data.moves[3].move.name,
    ],
    name: res.data.name,
    stats: stats(res),
    types: addTypes(res),
    sprites: {
      default: res.data.sprites.other["official-artwork"].front_default,
      frontDefault: res.data.sprites.front_default,
      backDefault: res.data.sprites.back_default
    },
  };
  return data;
}

function addTypes(res) {
  const t = [];
  if (res.data.types.length === 1) {
    t.push(res.data.types[0].type.name);
  } else {
    t.push(res.data.types[0].type.name);
    t.push(res.data.types[1].type.name);
  }

  return t;
}

function rename(name) {
  switch (name) {
    case "hp":
      return "HP";
    case "attack":
      return "Attack";
    case "defense":
      return "Defense";
    case "special-attack":
      return "Sp. Attack";
    case "special-defense":
      return "Sp. Defense";
    case "speed":
      return "Speed";
    default:
      return "Erro";
  }
}
function stats(res) {
  const s = [];
  res.data.stats.map((stat) => {
    s.push({
      name: rename(stat.stat.name),
      base_stat: stat.base_stat,
    });
  });
  return s;
}
