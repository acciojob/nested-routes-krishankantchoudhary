import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ url }) => {
  return (
      <nav>
        <ul>
          <li><Link to={`${url}/grooming`}>Grooming</Link></li>
          <li><Link to={`${url}/shirt`}>Shirt</Link></li>
          <li><Link to={`${url}/trouser`}>Trouser</Link></li>
          <li><Link to={`${url}/jewellery`}>Jewellery</Link></li>
        </ul>
      </nav>
  );
};

export default Layout;
