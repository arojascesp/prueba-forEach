//TI imports
import React from "react";

const PagesNavigation = (props) => {
  return (
    <div className="container text-center my-4">
      <button
        className="btn btn-dark col text-center"
        onClick={() => props.onDecrease()}
      >
        Previous Page
      </button>
      <button
        className="btn btn-dark col text-center"
        onClick={() => props.onUpgrade()}
      >
        {console.log({ previous: props.previousPage, next: props.nextPage })}
        Next Page
      </button>
    </div>
  );
};

export default PagesNavigation;
