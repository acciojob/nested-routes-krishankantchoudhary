import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Women">Women</Link></li>
        </ul>
        </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Women" component={Women} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
