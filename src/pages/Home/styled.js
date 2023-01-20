import styled from "styled-components";

export const HomePageContainer = styled.div`
  max-width: 100%;
  width: 100%;
  min-height: 100%;
  background-color: #5e5e5e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

export const H1Home = styled.h1`
  height: 72px;
  margin-left: 40px;
  /* top: 220px; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  margin-bottom: 50px;
  /* identical to box height */
  color: #ffffff;
`;

export const MainHome = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
/* gap: 10px; */
`;
