import styled from "styled-components";

export const HomePageContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #5e5e5e;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;


export const Footer = styled.div`
  padding:  20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
