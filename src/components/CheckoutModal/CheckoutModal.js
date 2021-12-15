import React from "react";
import {Body, Button } from "./style";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function CheckoutModal({ isOpen, closeModal, children }) {
  return (
    <>
      <Modal
        // isOpen={true}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Checkout Modal"
      >
        <Body>
          <Button onClick={closeModal}>x</Button>
          {children}
        </Body>
      </Modal>
    </>
  );
}
