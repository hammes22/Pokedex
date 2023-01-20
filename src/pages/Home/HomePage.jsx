import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { BASE_URL } from "../../constants/apiConstants";
import useRequestList from "../../hooks/useRequestList";
import { H1Home, HomePageContainer, MainHome } from "./styled";
export default function HomePage() {
  const { response, request } = useRequestList();

  React.useEffect(() => {
    request(`${BASE_URL}?offset=${0}&limit=${21}}`);
  }, []);

  return (
    <>
      <Header />
      <HomePageContainer>
        <H1Home>Todos Pokémons</H1Home>

        <MainHome>
          {response.results.map((pokemon) => {
            return <Card key={pokemon.name} pokemon={pokemon} />;
          })}
        </MainHome>
      </HomePageContainer>
    </>

  );
}
