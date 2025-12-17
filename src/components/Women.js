import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

import Jewellery from "../pages/Jewellery";
import Trouser from "../pages/Trouser";
import Shirt from "../pages/Shirt";
import Grooming from "../pages/Grooming";

const Women = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <p>Womens Items:</p>

      <nav>
        <Link to={`${url}/grooming`}>Grooming</Link>{" "}
        <Link to={`${url}/shirt`}>Shirt</Link>{" "}
        <Link to={`${url}/trouser`}>Trouser</Link>{" "}
        <Link to={`${url}/jewellery`}>Jewellery</Link>
      </nav>

      <Switch>
        <Route path={`${path}/grooming`} component={Grooming} />
        <Route path={`${path}/shirt`} component={Shirt} />
        <Route path={`${path}/trouser`} component={Trouser} />
        <Route path={`${path}/jewellery`} component={Jewellery} />
      </Switch>
    </div>
  );
};

export default Women;
