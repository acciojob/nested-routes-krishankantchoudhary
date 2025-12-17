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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/women" component={Women} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
