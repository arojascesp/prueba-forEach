//TI imports
import React from "react";

//components imports
import CharacterCard from "../components/CharacterCard";

const CharacterList = (props) => {
  const characterList = props.characterList;

  return (
    <div className="my-2">
      <ul className="border">
        {characterList.map((character) => (
          <li key={character.name} type="none" className="text-center">
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
