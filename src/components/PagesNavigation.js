//TI imports
import React from "react";

const PagesNavigation = (props) => {
  return (
    <div className="container text-center my-4">
      <button
        className="btn btn-dark col text-center text-white star-jedi-font mx-4 shadow-sm"
        onClick={() => props.onDecrease()}
      >
        Previous Page
      </button>
      <button
        className="btn btn-dark col text-center star-jedi-font mx-4 "
        onClick={() => props.onUpgrade()}
      >
        {console.log({ previous: props.previousPage, next: props.nextPage })}
        Next Page
      </button>
    </div>
  );
};

export default PagesNavigation;
