import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ url }) => {
  return (
      <nav>
        <Link to={`${url}/grooming`}>Grooming</Link>
        <Link to={`${url}/shirt`}>Shirt</Link>
        <Link to={`${url}/trouser`}>Trouser</Link>
        <Link to={`${url}/jewellery`}>Jewellery</Link>
      </nav>
    
  );
};

export default Layout;
