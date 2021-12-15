import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Container } from "./style";
import Product from "../Product/Product";

export default function ProductsGrid() {
  const appContext = useContext(AppContext);
  const { pagePokes } = appContext;
  return (
    <Container>
      {pagePokes.map((item) => {
        if (item !== undefined) {
          return <Product key={item.id} {...item} />;
        } else{
          return <></>
        }
      })}
    </Container>
  );
}
