import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from "./App";
import BigCard from "./components/bigcard";

export default function RouterRoute() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
					<Route exact strict path="/:id">
            <BigCard />
          </Route>
        </Switch>
    </Router>
  );
}
