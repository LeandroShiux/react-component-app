import React from "react";
import { Container, Content } from "./style";
import Catalog from "./../Catalog/Catalog";
import SideBar from "./../SideBar/SideBar";

export default function Layout() {
  return (
    <Container>
      <Content>
        <Catalog />
        <SideBar />
      </Content>
    </Container>
  );
}
