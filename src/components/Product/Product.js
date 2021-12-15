import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import errorimg from "../../assets/No_image_available.png"
import {
  Container,
  SelectButtons,
  AddButton,
  SubButton,
  Caption,
  ProductName,
  Quantity,
  Price,
} from "./style";



export default function Product({ id, name }) {
  let capitalizedName = name[0].toUpperCase() + name.slice(1);

  const appContext = useContext(AppContext);
  const { formatPrice, getQuantity, cartAdd, cartSub, pokeImgUrl } = appContext;

  return (
    <Container>
      <img
        src={pokeImgUrl(id)}
        onError={(e)=>{e.target.onerror = null; e.target.src=errorimg}}
        alt=""
      />
      <Caption>
        <ProductName>{capitalizedName}</ProductName>
        <Price>{formatPrice(id)}</Price>
        <SelectButtons>
          <span>
            <AddButton onClick={()=>cartAdd(id)}>+</AddButton>
            <SubButton onClick={()=>cartSub(id)}>-</SubButton>
          </span>
          <Quantity>{getQuantity(id)}</Quantity>
        </SelectButtons>
      </Caption>
    </Container>
  );
}
