import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Main from "./Main";
import PlanA from "./PlanA";
import PlanB from "./PlanB";
import Final from "./Final";


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/Main" component={Main} />
          <Route path="/PlanA" component={PlanA} />
          <Route path="/PlanB" component={PlanB} />
          <Route path="/Final" component={Final} />
          <Redirect to="/Main" /> {/* Default Page*/}
        </Switch>
      </div>
    )
  }
}