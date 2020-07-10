import React from "react";

const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    {props.location.name} <span className="card-locationname"></span>
                </h3>
                <p>{props.location.address}</p>
                <img src={props.location.picture} alt="City Skyline" />
                <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close</button>
            </div>
        </div>
    );
};

export default LocationCard