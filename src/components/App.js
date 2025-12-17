import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div>
          <Switch>
            {/* HOME */}
            <Route exact path="/">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/women">Women</Link></li>
                </ul>
              </nav>
              <Home />
            </Route>

            {/* WOMEN */}
            <Route path="/women" component={Women} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
