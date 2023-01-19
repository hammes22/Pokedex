import { Button, ButtonContainer, FigureContainer, HeaderContainer } from "./styled";
import pokemonHeader from "../../assets/imagens/pokemonHeader.svg"
export default function Header() {
    return (
        <HeaderContainer>
            <FigureContainer>
                <img src={pokemonHeader} alt="Pokémon" />
            </FigureContainer>
            <ButtonContainer>
                <Button>Pokedex</Button>
            </ButtonContainer>
        </HeaderContainer>
    )
} 