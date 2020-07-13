import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnersManager';

const OwnerForm = props => {
    const [owner, setOwner] = useState({ name: "", position: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...owner };
        stateToChange[evt.target.id] = evt.target.value;
        setOwner(stateToChange);
    };

    const constructNewOwner = evt => {
        evt.preventDefault();
        if (owner.name === "" || owner.position === "") {
            window.alert("Please input a name and position");
        } else {
            setIsLoading(true);
            OwnerManager.post(owner)
            .then(() => props.history.push("/owners"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="name"
                            placeholder="Owner name"
                        />
                        <label hmtlfor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="position"
                            placeholder="Position"
                        />
                        <label htmlFor="position">Position</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewOwner}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default OwnerForm