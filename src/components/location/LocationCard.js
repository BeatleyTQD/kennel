import React from "react";
import { Link } from "react-router-dom"


const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <img src={props.locations.picture} alt="City Skyline" />
                <h3>
                    {props.locations.name} <span className="card-locationname"></span>
                </h3>
                <p>{props.locations.address}</p>
                <button type="button" onClick={() => props.deleteLocation(props.locations.id)}>Close</button>
                <button type="button" onClick={() => props.history.push(`/locations/${props.locations.id}/edit`)}>Edit</button>
                <Link to={`/locations/${props.locations.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default LocationCard