import React from "react";
import "./CharacterCard.css";

const CharacterCard = (props) => (
  <div className="row">
  <div className="col s12 m3">
    <div className="card">
      <div className="card-image image">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  </div>
</div>
)

export default CharacterCard;