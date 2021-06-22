//TI imports
import React, { Fragment } from "react";

const Number = ({ number }) => {
  const isThree = number % 3 === 0;

  const isFive = number % 5 === 0;

  if (isThree) {
    number = "fizz";
  }

  if (isFive) {
    number = "buzz";
  }

  if (isFive) {
    if (isThree) {
      number = "fizzbuzz";
    }
  }
  return (
    <Fragment>
      <h2 className="alert alert-warning text-center">{number}</h2>
    </Fragment>
  );
};

export default Number;
