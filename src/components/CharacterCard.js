//TI imports
import React, { Fragment } from "react";

const CharacterCard = (props) => {
  return (
    <Fragment>
      <hr />
      <h1>{props.character.name}</h1>
      <hr />
    </Fragment>
  );
};

export default CharacterCard;
