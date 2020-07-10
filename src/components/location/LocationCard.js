import React from "react";
import { Link } from "react-router-dom"


const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <img src={props.location.picture} alt="City Skyline" />
                <h3>
                    {props.location.name} <span className="card-locationname"></span>
                </h3>
                <p>{props.location.address}</p>
                <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
                <Link to={`/locations/${props.location.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default LocationCard