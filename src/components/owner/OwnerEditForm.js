import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnersManager";

const OwnerEditForm = props => {
    const [owner, setOwner] = useState({name:"", position:""});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...owner };
        stateToChange[evt.target.id] = evt.target.value;
        setOwner(stateToChange);
    };

    const updateExistingOwner = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedOwner = {
            id: props.match.params.ownerId,
            name: owner.name,
            position: owner.position,
            picture: owner.picture
        };

        OwnerManager.update(editedOwner)
            .then(() => props.history.push("/owners"))
    }

    useEffect(() => {
        OwnerManager.get(props.match.params.ownerId)
            .then(owner => {
                setOwner(owner);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={owner.name}
                        />
                        <label htmlFor="name">Owner Name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="position"
                            value={owner.position}
                        />
                        <label htmlFor="position">Position</label>
                        </div>
                        <div className="alignRight">
                            <button 
                                type="button" disabled={isLoading}
                                onClick={updateExistingOwner}
                                className="btn btn-primary"
                            >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default OwnerEditForm