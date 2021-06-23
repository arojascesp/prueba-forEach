//TI imports
import React from "react";
import { Link } from "react-router-dom";

//components imports
import CharacterCard from "../components/CharacterCard";
import CharacterDetail from "../components/CharacterDetail";

const CharacterList = (props) => {
  const characterList = props.characterList;

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Character's Name</th>
          </tr>
        </thead>
        <tbody>
          {characterList.map((character) => {
            return (
              <tr>
                <td>
                  <CharacterCard character={character} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterList;
