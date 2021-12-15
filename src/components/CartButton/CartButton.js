import React, { useContext } from "react";
import { useHistory } from "react-router";
import AppContext from "../../context/AppContext";
import { Container, IconContainer, CartIcon, Counter } from "./style";

export default function CartButton() {
  const appContext = useContext(AppContext);
  const { getTotalItems, showSidebar, setShowSidebar } = appContext;
  const history = useHistory();

  const handleCartClick = () => {
    if (window.innerWidth > 1200) {
      history.push("/resumo");
    } else {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <Container>
      <IconContainer onClick={handleCartClick}>
        <CartIcon />
        {getTotalItems() > 0 && <Counter>{getTotalItems()}</Counter>}
      </IconContainer>
    </Container>
  );
}
