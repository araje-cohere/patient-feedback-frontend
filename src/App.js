import { Switch, Route } from "react-router-dom";
import React from "react";
import MainForm from "./components/MainForm";
import Dashboard from "./components/Dashboard";
import Thanks from "./components/Thanks";

const App = () => {
  return(
      <Switch>
            <Route exact path="/" component={MainForm} />
            <Route exact path="/thanks" component={Thanks} />
            <Route path="/dashboard" component={Dashboard} />
      </Switch>
  );
};

export default App;
