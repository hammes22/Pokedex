import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 160px;
    width: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
`

export const FigureContainer = styled.figure`
grid-column: 2;
`

export const ButtonContainer = styled.div`
    grid-column: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px 10px
`

export const Button = styled.button`

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
background-color:  #33A4F5;
height: 74px;
width: 287px;
border-radius: 8px;
padding: 4px 10px 4px 10px;
`