import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Invitation from "./Invitation";
import LoveLetter from "./LoveLetter";
import HM10 from "./HM10";
import Layout from "../components/Layout";

const Routes = () => (
  <Switch>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/invitation" component={Invitation} />
      <Route exact path="/letters" component={LoveLetter} />
      <Route exact path="/hm10" component={HM10} />
    </Layout>
  </Switch>
);

export default Routes;
