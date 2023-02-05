import React, { useContext } from "react";
import {
  Container,
  PokemonNumber,
  PokemonName,
  PokemonType,
  TypesContainer,
  Pokeball,
  CatchButton,
  Pokemon,
  DetalhesContainer,
} from "./styles";
import pokeball from "../../assets/imagens/fundo.png";
import { getTypes } from "../../utils/ReturnPokemonType";
import { Link, useNavigate } from "react-router-dom";
import { getColors } from "../../utils/ReturnCardColor";
import { goToDetailsPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";
import useModal from "../../hooks/useModal";

const PokemonCard = ({ pokemon , page}) => {
  const navigate = useNavigate();
  const { id, name, types, sprites } = pokemon;
  const context = useContext(GlobalContext);
  const { addPokedex, inPokedex, removePokedex } = context.pokedex;
  const { modal, openModal, action } = useModal();

  const onPokedex = () => {
    return (
      <CatchButton
        background={"#FF6262"}
        color={"#FFFFFF"}
        onClick={() => {
          openModal(action.delete);
          removePokedex(pokemon, page);
        }}
      >
        Excluir!
      </CatchButton>
    );
  };
  const offPokedex = () => {
    return (
      <CatchButton
        background={"#FFFFFF"}
        color={"#000"}
        onClick={() => {
          openModal(action.add);
          addPokedex(pokemon);
        }}
      >
        Capturar!
      </CatchButton>
    );
  };

  return (
    <>
      {modal()}
      <Container color={getColors(types[0])}>
        <div>
          <PokemonNumber>#{id}</PokemonNumber>
          <PokemonName>{name}</PokemonName>
          <TypesContainer>
            {types.map((type) => {
              return <PokemonType key={type} src={getTypes(type)} alt="" />;
            })}
          </TypesContainer>
          <DetalhesContainer>
            <Link
              onClick={(e) => {
                e.preventDefault();
                goToDetailsPage(navigate, { state: pokemon });
              }}
            >
              Detalhes
            </Link>
          </DetalhesContainer>
        </div>
        <div>
          <Pokemon src={sprites.default} alt={name} />
          {inPokedex(id) ? offPokedex() : onPokedex()}
        </div>
        <Pokeball src={pokeball} alt="pokeball" />
      </Container>
    </>
  );
};

export default PokemonCard;
