import React from "react";
import Theme from "./theme";
import Data from "./data";
import AppState from "../../context/AppState";
import { ThemeProvider } from "styled-components";
import StoreRoutes from "../../StoreRoutes/StoreRoutes";

export default function DragonStore() {
  return (
    <AppState data={Data}>
      <ThemeProvider theme={Theme}>
        <StoreRoutes/>
      </ThemeProvider>
    </AppState>
  );
}
