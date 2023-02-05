import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 440px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
  z-index: 0;
`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const PokemonName = styled.h1`
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
  display: flex;
  flex-direction: row;
`;
export const Pokeball = styled.img`
  position: absolute;
  width: 210px;
  height: 210px;
  /* top: 0; */
  right: 0;
  bottom: 15px;
`;

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: ${(props) => props.background};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 22px;
  z-index: 2;
  color: ${(props) => props.color};
`;
export const DetalhesContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  a {
    color: white;
  }
`;

export const Pokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index:2;
`;
