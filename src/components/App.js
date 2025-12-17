import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link><Link to="/Women">Women</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Women" component={Women} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
