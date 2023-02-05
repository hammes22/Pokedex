import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import TitlePage from "../../components/TitlePage";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardsContainer, DetailPageContainer } from "./styled";
export default function PokedexPage() {
  const context = useContext(GlobalContext);
  const { changeHeader, headerpokedex } = context.headerSettings
  const { pokedex } = context.pokedex
  useEffect(() => {
    changeHeader(headerpokedex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>

      <DetailPageContainer>
        <Header />
        <TitlePage title={pokedex.length > 0 ? "Pokedex" : "Pokedex Vazia"} />
        <CardsContainer>
          {pokedex.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} page={"pokedex"} />;
          })}
        </CardsContainer>

      </DetailPageContainer>
    </>

  );
}
