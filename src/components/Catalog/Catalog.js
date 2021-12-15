import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Container } from "./style";
import Pagination from "./../Pagination/Pagination";
import ProductsGrid from "../ProductsGrid/ProductsGrid";

export default function Catalog() {
  const appContext = useContext(AppContext);
  const { currentTerm, loading, showSidebar } = appContext;
  console.log(currentTerm);

  if (loading) {
    return <Container></Container>;
  }
  return (
      <Container showSidebar={showSidebar}>
        {currentTerm !== "" && <h3>Você pesquisou por: {currentTerm}</h3>}
        <ProductsGrid />
        <Pagination />
      </Container>
  );
}
