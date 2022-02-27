import React from "react";
import { Route, Switch } from "react-router-dom";
import FandF from "./Components/FandF";
import Question from "./Components/Question";
import AddNewProfile from "./Components/AddNewProfile";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={"/"} component={Question} />
        <Route exact path={"/question"} component={Question} />
        <Route exact path={"/fandf"} component={FandF} />
        <Route exact path={"/addnewprofile"} component={AddNewProfile} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
