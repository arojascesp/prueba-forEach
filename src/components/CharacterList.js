//TI imports
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

//components imports
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  return (
    <div className="container">
      <ul className="row">
        {props.characterList.map((character) => (
          <li
            key={character.name}
            type="none"
            className="text-start my-1 col-sm-12 col-md-3 col-xxl-2"
          >
            <BrowserRouter>
              <Link to="/swapi/details">
                <CharacterCard character={character} />
              </Link>
            </BrowserRouter>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
