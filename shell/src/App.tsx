import ReactApp from "@micro/react-app";
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

const NotFound = () => <h1>Not Found</h1>;

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <ReactApp />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
