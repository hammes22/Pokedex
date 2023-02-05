import styled from "styled-components";
export const HeaderContainer = styled.header`
    max-height: 20vh;
    max-width: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
`

export const FigureContainer = styled.figure`
  padding: 10px;
  grid-column: 2;
  align-self: center;
  justify-self: center;
`

export const ButtonContainer = styled.div`
    grid-column: 3;
    display: flex;
    align-self: center;
    justify-self: center;
    padding: 4px 10px
`

export const DetalhesContainer = styled.div`
grid-column: 1;
  align-self: center;
  justify-self: center;  
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  a {
    color: #000;
  }
`;