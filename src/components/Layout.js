//TI imports
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

//styles imports
import "./styles/Layout.css";

const Layout = (props) => {
  return (
    <div className="container Layout">
      <BrowserRouter>
        <div className="text-center">
          <Link to="/fizzbuzz" className="btn btn-dark m-4 text-">
            FizzBuzz
          </Link>
          <Link to="/swapi" className="btn btn-dark m-4">
            Swapi
          </Link>
        </div>
        {props.children}
      </BrowserRouter>
      ;
    </div>
  );
};

export default Layout;
