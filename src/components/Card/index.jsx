import React from "react";
import useRequestPokemon from "../../hooks/useRequestPokemon";
import IconsType from "../IconsType";
import { CapturarContainer, CardBottom, CardContainer, CardLeft, CardRight, DetalhesContainer, Figure, FigureIcon, Pid, PName } from "./styled";
import banner from "../../assets/imagens/fundo.png";
import { colors } from "../../constants/colors";
import { Link, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";


export default function Card({ pokemon }) {
    function corFundo(type) {
        switch (type) {
            case "fire":
                return colors.fire;
            case "grass":
                return colors.grass;
            case "electric":
                return colors.electric;
            case "water":
                return colors.water
            case "ground":
                return colors.ground
            case "rock":
                return colors.rock
            case "fairy":
                return colors.fairy
            case "poison":
                return colors.poison
            case "bug":
                return colors.bug
            case "dragon":
                return colors.dragon
            case "psychic":
                return colors.psychic
            case "flying":
                return colors.flying
            case "fighting":
                return colors.fighting
            case "normal":
                return colors.normal
            case "dark":
                return colors.dark
            case "steel":
                return colors.steel
            case "ice":
                return colors.ice
            case "ghost":
                return colors
            default:
                break;
        }
    }

    const navigate = useNavigate()
    React.useEffect(() => {
        request(pokemon.url, {}, {}, "get");
    }, []);

    const { response, request } = useRequestPokemon()

    return (

        <CardContainer cor={corFundo(response.types[0])}>
            <CardLeft>
                <Pid>#{response.id}</Pid>
                <PName>{response.name}</PName>
                <FigureIcon>{response.types.map((t) => {
                    return <IconsType key={t} type={t} />
                })}
                </FigureIcon>
            </CardLeft>

            <CardRight>
                <img className="banner" src={banner} alt="" />
                <img src={response.sprites.official_front_default} alt="" />

            </CardRight>

            <CardBottom>
                <DetalhesContainer>
                    <Link onClick={(e) => {
                        e.preventDefault();
                        goToDetailsPage(navigate, { state: response })
                    }}

                    >
                        Detalhes
                    </Link>

                </DetalhesContainer>

                <CapturarContainer>
                    <input className="capturar" value={"capturar"} type="button" />
                </CapturarContainer>
            </CardBottom>


        </CardContainer>
    )
}