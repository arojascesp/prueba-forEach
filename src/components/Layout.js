//TI imports
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

//styles imports
import "./styles/Layout.css";
import "../components/styles/FizzBuzz.css";

const Layout = (props) => {
  return (
    <div className="container Layout">
      <BrowserRouter>
        <div className="text-center">
          <Link to="/" className="btn btn-dark m-0 font-kaushan">
            FizzBuzz
          </Link>
          <Link to="/swapi" className="btn btn-dark m-4 star-jedi-font">
            Swapi
          </Link>
        </div>
        {props.children}
      </BrowserRouter>
    </div>
  );
};

export default Layout;
