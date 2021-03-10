import "./App.css";
import Home from "./Compronents/HomePage/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoMatch from "./Compronents/NoMatch/NoMatch";
import TeamDetails from "./Compronents/TeamDetails/TeamDetails";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Details/:id">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
