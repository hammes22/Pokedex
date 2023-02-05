import styled from "styled-components";

export const Button = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.color};
  background: ${(props)=> props.background};
  color: #ffffff;
  height: 74px;
  width: 287px;
  border-radius: 8px;
  padding: 4px 10px 4px 10px;
  align-self: center;
  justify-self: center;
`;
