//TI imports
import React, { Fragment } from "react";

//styles imports
import "./styles/FizzBuzz.css";

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
      <h2
        className="my-4 titulo py-4 font-kaushan text-center text-white shadow-sm"
        role="button"
      >
        Fizz Buzz!
      </h2>

      <ul className="d-flex row">
        {arr.map((number) => (
          <li
            key={number}
            className="col-sm-6 col-xxl-2 col-md-3 m-0 shadow-sm"
            role="button"
            value={number}
            type="none"
            onClick={(e) => {
              console.log("hey! hiciste click!!");
            }}
          >
            {" "}
            <Number
              number={number}
              className="font-kaushan bg-dark"
              value={number}
            />{" "}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default NumberList;
