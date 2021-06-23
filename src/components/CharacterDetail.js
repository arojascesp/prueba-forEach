//TI imports
import React, { useState } from "react";

//components import

const CharacterDetail = ({ character }) => {
  const [homeworld, setHomeWorld] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col alert alert-warning">
          <h3>Nombre: {character.name}</h3>
          <h3>Birthday year: {character.birth_year}</h3>
          <h3>Genero: {character.gender}</h3>
          <h3>Origin's Planet: {character.homeworld}</h3>
        </div>
        <div className="col alert alert-info">
          <h3 className="alert alert-dark">Movies</h3>
          <ul className="alert alert-info">
            {character.films.map((film) => {
              return <h2>{film}</h2>;
            })}
          </ul>
        </div>
      </div>
      <h2>{character.name} - Details</h2>
    </div>
  );
};

export default CharacterDetail;
