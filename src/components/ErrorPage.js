//TI imports
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const ErrorPage = ({ error }) => {
  return (
    <div className="container text-center">
      <div className="container">
        <h1 className="text-center text-white star-jedi-font my-4">ERROR!</h1>
        <h2 className="text-center text-dark star-jedi-font my-4">
          {error.message}
        </h2>
        <BrowserRouter>
          <a href="/swapi" className="btn btn-dark m-4 star-jedi-font">
            Back to the Force
          </a>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default ErrorPage;
