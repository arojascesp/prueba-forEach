//TI imports
import React, { Fragment } from "react";

//components imports
import Number from "./Number";

const NumberList = () => {
  const arr = [];
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
  console.log(arr);
  return (
    <Fragment>
      <h2>Fizz Buzz! </h2>

      <ul className="d-flex row">
        {arr.map((number) => (
          <li key={number} className="col-sm-6 col-xxl-2 col-md-3" type="none">
            {" "}
            <Number number={number} />{" "}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NumberList;
