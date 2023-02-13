import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import TitlePage from "../../components/TitlePage";
import { BASE_URL } from "../../constants/apiConstants";
import { GlobalContext } from "../../contexts/GlobalContext";
import useRequestPokemon from "../../hooks/useRequestPokemon";
import { CardsContainer, Footer, HomePageContainer } from "./styled";




export default function HomePage() {
  const context = useContext(GlobalContext);

  const { changeHeader, headerAllPokemons } = context.headerSettings
  const { inPokedex } = context.pokedex
  const { pokemons, pokemonList, requestPokemon, onLoad } = useRequestPokemon()
  const { count } = pokemonList
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(21);

  useEffect(() => {
    changeHeader(headerAllPokemons)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const offset = (currentPage - 1) * limit
    requestPokemon(`${BASE_URL}?limit=${limit}}&offset=${offset}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const cards = () => {
    return (
      <>
        <TitlePage title={"Todos Pokémons"} />
        <CardsContainer>
          {pokemons.filter((p) => inPokedex(p.id)).map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </CardsContainer>
      </>
    )
  }

  const loading = () => {
    return (
      <TitlePage title={"Carregando..."} />
    )
  }

  return (
    <>
      <HomePageContainer>
        <Header />

        {onLoad ? loading() : cards()}
        {!onLoad && <Footer>
          <Pagination
            limit={limit}
            total={count}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Footer>}

      </HomePageContainer>
    </>

  );
}
