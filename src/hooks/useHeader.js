import { useState } from "react";
export default function useHeader() {
  const [headerSettings, setHeaderSettings] = useState({
    hiddenAllPokemons: false,
    hiddenbuttonPokedex: false,
   
  });
  const headerAllPokemons = {
    hiddenAllPokemons: true,
    hiddenButtonPokedex: false,
    
  };
  const headerDetails = {
    hiddenAllPokemons: false,
    hiddenButtonPokedex: false,
   
  };
  const headerpokedex = {
    hiddenAllPokemons: false,
    hiddenButtonPokedex: true,
   
  };

  const headerError = {
    hiddenAllPokemons: false,
    hiddenbuttonPokedex: false,
    
  };

  const changeHeader = (header) => {
    setHeaderSettings(header);
  };

  return {
    headerSettings,
    changeHeader,
    headerAllPokemons,
    headerDetails,
    headerpokedex,
    headerError,
  };
}
