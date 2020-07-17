import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./stylesContent";

// pages
import Dashboard from "../../Pages/Dashboard/Dashboard";
// context
import { useAppState } from "../../Context/AppContext";

function Content(props) {
  var classes = useStyles();

  // global
  var appState = useAppState();

  return (
    <div
      className={classnames(classes.content, {
        [classes.contentShift]: appState.isSidebarOpened,
      })}
    >
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default withRouter(Content);
