//TI imports
import React, { Fragment } from "react";

const Number = ({ number, className }) => {
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
      <h2
        className={`alert  text-center text-white ${className} ${
          isNaN(number) && "text-muted"
        }`}
      >
        {number}
      </h2>
    </Fragment>
  );
};

export default Number;
