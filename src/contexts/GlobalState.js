import useHeader from "../hooks/useHeader";
import usePokedex from "../hooks/usePokedex";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
  const pokedex = usePokedex();
  const headerSettings = useHeader();

  const context = {
    pokedex,
    headerSettings,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
}
