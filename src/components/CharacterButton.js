//TI imports
import React, { useState } from "react";

//components imports

const CharacterButton = (props) => {
  const [isVisible, setIsVisible] = useState("false");

  if (isVisible === "true") {
    return (
      <div className="container alert alert-warning">
        <button
          className="text-end"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          -
        </button>
        <h2 className="alert alert-light">{props.character.name}</h2>
      </div>
    );
  }
  return (
    <button
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      {<h4>{props.character.name}</h4>}
    </button>
  );
};

export default CharacterButton;
