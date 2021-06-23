//TI imports
import React from "react";

//components imports
import CharacterButton from "./CharacterButton";

const CharacterList = (props) => {
  return (
    <div className="container">
      <ul>
        {props.characterList.map((character) => (
          <li key={character.name} type="none" className="text-start my-1">
            <CharacterButton
              character={character}
              modalIsOpen={props.isOpen}
              closeModal={props.closeModal}
              openModal={props.openModal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
