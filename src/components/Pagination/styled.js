import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  min-width: 500px;
  max-width: 900px;
  justify-content: space-between;
  margin-top: 10px;
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div`
  margin: 0 2px;
  min-width: 30px;
  padding: 5px;
  text-align: center;
  font-weight: 550;
  cursor: pointer;
  background-color: white;

  ${(props) =>
    props.isSelect && {
      background: "#6d6d6d",
      color: "#fff",
      //   padding: "0 5px",
    }}
`;

