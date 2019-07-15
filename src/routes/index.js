import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Invitation from "./Invitation";
import Layout from "../components/Layout";

const Routes = () => (
  <Switch>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/invitation" component={Invitation} />
    </Layout>
  </Switch>
);

export default Routes;
