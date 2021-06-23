//TI imports
import React, { Fragment, useState } from "react";

const CharacterCard = ({ character }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Fragment>
      <button className="btn btn-dark mb-2">{character.name}</button>
    </Fragment>
  );
};

export default CharacterCard;
