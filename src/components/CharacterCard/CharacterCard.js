import React from "react";
import "./CharacterCard.css";

const CharacterCard = (props) => (

      <div className="row">
      <div className="col s12 m4 lg3">
        <div onClick={() => props.handleClick(props.id)} className="card grow">
          <img src={props.image} alt={props.name} />
        </div>
      </div>
      </div>

);

export default CharacterCard;