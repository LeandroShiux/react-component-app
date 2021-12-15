import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import GlobalStyles from "../styles/GlobalStyles";
import Overview from "../components/Overview/Overview";
import Layout from "../components/Layout/Layout";

export default function StoreRoutes({ storeName }) {
  return (
      <Router>
        <Header />
        <Route exact path="/" component={Layout} />
        <Route path="/resumo" component={Overview} />
        <GlobalStyles />
      </Router>
  );
}
