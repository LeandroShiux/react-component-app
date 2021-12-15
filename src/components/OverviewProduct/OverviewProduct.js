import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  Container,
  DeleteButton,
  ProductName,
  Quantity,
  Price,
} from "./style";

export default function ListedProduct({ id, name, quantity, price }) {
  let capitalizedName = name[0].toUpperCase() + name.slice(1);
  const appContext = useContext(AppContext);
  const { formatCurrency, cartRemove } = appContext;
  return (
    <Container>
      <Quantity>{quantity}x</Quantity>
      <ProductName>{capitalizedName}</ProductName>
      <Price>{formatCurrency(price * quantity)}</Price>
      <td>
        <DeleteButton onClick={() => cartRemove(id)} />
      </td>
    </Container>
  );
}
