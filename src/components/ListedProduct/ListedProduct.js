import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  Container,
  DeleteButton,
  ProductName,
  Quantity,
  Price,
  Wrapper,
} from "./style";

export default function ListedProduct({ id, name, quantity,price }) {
  let capitalizedName = name[0].toUpperCase() + name.slice(1);
  const appContext = useContext(AppContext);
  const {formatCurrency, cartRemove } = appContext;
  return (
    <Container>
      <Wrapper>
        <span>
          <Quantity>{quantity}x</Quantity>
          <ProductName>{capitalizedName}</ProductName>
        </span>
        <Price>{formatCurrency(price* quantity)}</Price>
      </Wrapper>

      <DeleteButton onClick={()=> cartRemove(id)} />
    </Container>
  );
}
