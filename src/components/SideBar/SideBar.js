import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  ProductsList,
  Total,
  CheckoutButton,
  FlexEnd,
} from "./style";
import ListedProduct from "./../ListedProduct/ListedProduct";

export default function SideBar() {
  const appContext = useContext(AppContext);
  const { cart, getTotal, getTotalItems, formatCurrency, showSidebar, data } = appContext;

  return (
    <Container showSidebar={showSidebar}>
      <Title>{data.cartText} ({getTotalItems()})</Title>
      <ProductsList>
        {cart.map((item) => (
          <ListedProduct key={item.id} {...item} />
        ))}
      </ProductsList>
      <FlexEnd>
        <Total>Total: {formatCurrency(getTotal())}</Total>
        <Link to="/resumo">
          <CheckoutButton>{data.nextText}</CheckoutButton>
        </Link>
      </FlexEnd>
    </Container>
  );
}
