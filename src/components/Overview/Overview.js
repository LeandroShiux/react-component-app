import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import { Container, WrapperBox, Wrapper, CartTable, Title, TableContainer } from "./style";
import OverviewProduct from "./../OverviewProduct/OverviewProduct";
import Summary from "../Summary/Summary";

export default function Overview() {
  const appContext = useContext(AppContext);
  const { cart, data } = appContext;

  if (cart.length === 0) {
    return (
      <Container>
        <WrapperBox>
          <h3>Você ainda não selecionou nenhum produto.</h3>
          <h3>
            Clique <Link to="/">aqui</Link> para voltar para a loja.
          </h3>
        </WrapperBox>
      </Container>
    );
  }

  return (
    <Container>
      <WrapperBox>
        <Title>{data.overviewCartText}</Title>
        <Wrapper>
          <TableContainer>
            <CartTable>
              <thead>
                <tr>
                  <th>Quantidade</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Remover?</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <OverviewProduct key={item.id} {...item} />
                ))}
              </tbody>
            </CartTable>
          </TableContainer>
          <Summary />
        </Wrapper>
      </WrapperBox>
    </Container>
  );
}
