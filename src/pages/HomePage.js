import React from "react";
import Header from "../components/Header";
import { BASE_URL } from "../constants/apiConstants";
import { INITIAL_STATE_LIST } from "../constants/initialStates";
import useRequestListPokemon from "../hooks/useRequest";
import { HomePageContainer, MainHome, PHome } from "./styled";
export default function HomePage() {
  const { response, request } =
    useRequestListPokemon(INITIAL_STATE_LIST);

  React.useEffect(() => {
    request(`${BASE_URL}?offset=${1}&limit=${20}}`, {}, {}, "get");
  }, []);

  console.log(request)
  return (
    <HomePageContainer>
      <Header />
      <MainHome>
        <PHome>Todos Pokémons</PHome>

        <MainHome>
          {response.results.map((pokemon) => {
            return <h2 key={pokemon.name}>{pokemon.name}</h2>;
          })}
        </MainHome>
      </MainHome>
    </HomePageContainer>
  );
}
