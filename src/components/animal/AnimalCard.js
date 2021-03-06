import React from "react";
import { Link } from "react-router-dom";
import "../animal/Animal.css"

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={props.animal.picture} alt="My Dog" />
        </picture>
        <h3><span className="card-petname">
          {props.animal.name}
        </span></h3>
        <p>{props.animal.breed}</p>
        <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
        <button type="button" onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>Edit</button>
        <Link to={`/animals/${props.animal.id}`}>
            <button>Details</button>
        </Link>
      </div>
    </div>
  );
}

export default AnimalCard;