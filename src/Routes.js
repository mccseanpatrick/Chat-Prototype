import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";

// export default () =>
//   <Switch>
//     <Route path="/" exact component={Login} />
//     <Route path="/login" exact component={Home} />
//   </Switch>;

export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/chat" exact component={Home} props={childProps} />
  <AppliedRoute path="/" exact component={Login} props={childProps} />
  { /* Finally, catch all unmatched routes */ }
  <Route component={Home} />
</Switch>;