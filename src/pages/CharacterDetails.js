//TI imports
import React from "react";

const CharacterDetails = ({ character }) => {
  return (
    <div className="container-fluid">
      <h1>{character.name}</h1>
    </div>
  );
};

export default CharacterDetails;
