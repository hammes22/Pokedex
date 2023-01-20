import styled from "styled-components";

export const CardContainer = styled.section`
  max-width: 400px;
  width: 400px;
  height: 210px;
  border-radius: 12px;
  margin: 50px 0;
  color: #fff;
  background-color: ${(props) => props.cor};
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`;
export const CardRight = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 90px;
    width: 198px;
    width: 198px;
  }
  align-items: center;
  .banner {
    position: absolute;
    margin-bottom: 5px;
    width: 250px;
    opacity: 0.5;
  }
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
`;

export const CardLeft = styled.div`
  padding: 10px;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
`;
export const CardBottom = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Pid = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: white;
`;
export const PName = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`;

export const FigureIcon = styled.figure`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 5px;
  align-items: center;
  margin: 10px 0;
`;

export const DetalhesContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  a {
    /* text-decoration: none; */
    color: white;
  }
`;

export const CapturarContainer = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  input {
    width: 146px;
    height: 38px;
    border: none;
    background: #ffffff;
    border-radius: 8px;
  }
`;
