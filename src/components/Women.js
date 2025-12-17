import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Jewellery from "../pages/Jewellery";
import Trouser from "../pages/Trouser";
import Shirt from "../pages/Shirt";
import Grooming from "../pages/Grooming";
import Layout from "../pages/Layout";

const Women = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <p>Womens Items:</p>
      <Layout url={url} />

      <Switch>
        <Route path={`${path}/Grooming`} component={Grooming} />
        <Route path={`${path}/Shirt`} component={Shirt} />
        <Route path={`${path}/Trouser`} component={Trouser} />
        <Route path={`${path}/Jewellery`} component={Jewellery} />
      </Switch>
    </div>
  );
};

export default Women;
