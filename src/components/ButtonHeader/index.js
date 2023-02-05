import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DETAILS_PAGE, HOME_PAGE } from "../../constants/routeConstants";
import { GlobalContext } from "../../contexts/GlobalContext";
import useModal from "../../hooks/useModal";
import { goToPokedex } from "../../routes/coordinator";
import { Button } from "./styled";

export default function ButtonHeader({ pokemon }) {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { headerSettings } = context.headerSettings;
  const { addPokedex, inPokedex, removePokedex } = context.pokedex;
  const { modal, openModal, action } = useModal();
  const location = useLocation();
  
  const buttons = () => {
    switch (location.pathname) {
      case DETAILS_PAGE:
        return pokemon && inPokedex(pokemon.id) ? offPokedex() : onPokedex();
      case HOME_PAGE:
        return buttonGoToPokedex();
      default:
        return buttonGoToPokedex();
    }
  };

  const buttonGoToPokedex = () => {
    return (
      <Button
        hidden={headerSettings.hiddenButtonPokedex}
        background={"#33a4f5"}
        onClick={() => {
          goToPokedex(navigate);
        }}
      >
        Pokedex
      </Button>
    );
  };

  const onPokedex = () => {
    return (
      <Button
        background={"#FF6262"}
        onClick={() => {
          removePokedex(pokemon);
          openModal(action.delete);
        }}
      >
        Excluir!
      </Button>
    );
  };
  const offPokedex = () => {
    return (
      <Button
        background={"#33a4f5"}
        onClick={() => {
          addPokedex(pokemon);
          openModal(action.add);
        }}
      >
        Adicionar!
      </Button>
    );
  };

  return (
    <>
      {modal()}
      {buttons()}
    </>
  );
}
