import React from "react";

const OwnerCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <img src={props.owner.picture} alt="{props.owner.name}" />
                <h3>
                    <span className="card-ownername">{props.owner.name}</span>
                </h3>
                <p>{props.owner.position}</p>
                <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>"""Stepped Down"""</button>
            </div>
        </div>
    );
}

export default OwnerCard