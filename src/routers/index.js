import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import NotFoundPage from "../components/NotFoundPage";
import Films from "../components/Films";
import Details from "../components/Details";
import ResidentsPage from "../components/Residents/Residents";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/films" component={Films} />
        <Route path="/details" component={Details} />
        <Route path="/residents" component={ResidentsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
