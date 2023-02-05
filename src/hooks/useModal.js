import { useState } from "react";
import Modal from "react-modal";
import go from "../assets/imagens/gotcha.png";
import ohNo from "../assets/imagens/ohNo.png";

export default function useModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [typemodal, setTypeModel] = useState();
  const action = {
    delete: "delete",
    add: "add",
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      position: "absolute",
      borderRadius: "12px",
      border: "1px solid black",
    },
  };

  function openModal(value) {
    setTypeModel(value);
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1500);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function returnImg() {
    switch (typemodal) {
      case action.add:
        return <img src={go} alt="" />;
      case action.delete:
        return <img src={ohNo} alt="" />;
      default:
        break;
    }
  }

  function modal() {
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {returnImg()}
      </Modal>
    );
  }
  return { modal, openModal, modalIsOpen, action };
}
