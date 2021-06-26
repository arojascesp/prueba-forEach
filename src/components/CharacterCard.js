//TI imports
import React from "react";

//assets imports
import cardImg from "./img/Man_silhouette.svg.png";
import "./styles/FizzBuzz.css";

//components imports

const CharacterCard = (props) => {
  return (
    <div className="card bg-dark text-white">
      <img
        src={cardImg}
        className="card-img card-img-avatar img-fluid"
        alt="..."
      />
      <div className="card-img-overlay">
        <h5 className="card-title star-jedi-font">{props.character.name}</h5>
        <p className="card-text text-muted">
          Gender: {props.character.gender}
          <br />
          Year of birth: {props.character.birth_year}
        </p>
        <p className="btn star-jedi-font text-white text-center">
          Click for More!
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
