import { ButtonContainer, DetalhesContainer, FigureContainer, HeaderContainer } from "./styled";
import pokemonHeader from "../../assets/imagens/pokemonHeader.svg"
import { Link, useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator"
import { AiOutlineLeft } from "react-icons/ai";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import ButtonHeader from "../ButtonHeader";
export default function Header({ pokemon }) {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { headerSettings } = context.headerSettings


    return (

        <HeaderContainer>
            <DetalhesContainer >
                <Link hidden={headerSettings.hiddenAllPokemons}
                    onClick={(e) => {
                        e.preventDefault();
                        goToHomePage(navigate);
                    }}
                >
                    <AiOutlineLeft /> Todos Pokemons
                </Link>
            </DetalhesContainer>
            <FigureContainer>
                <img src={pokemonHeader} alt="Pokémon" />
            </FigureContainer>
            <ButtonContainer >
                <ButtonHeader pokemon={pokemon} />
            </ButtonContainer>
        </HeaderContainer>
    )
} 