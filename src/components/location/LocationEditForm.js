import React, { useState, useEffect } from "react";
import LocationsManager from "../../modules/LocationsManager";

const LocationEditForm = props => {
    const [location, setLocation] = useState({ name:"", address:"" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...location };
        stateToChange[evt.target.id] = evt.target.value;
        setLocation(stateToChange);
    };

    const updateExisitingLocation = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedLocation = {
            id: props.match.params.locationId,
            name: location.name,
            address: location.address,
            picture: location.picture
        };
        console.log("edited location", editedLocation);

        LocationsManager.update(editedLocation)
            .then(() => props.history.push("/locations"))
    }

    useEffect(() => {
        LocationsManager.get(props.match.params.locationId)
        .then(location => {
            setLocation(location);
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
                        value={location.name}
                    />
                    <label htmlFor="name">Location Name</label>

                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="address"
                        value={location.address}
                    />
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExisitingLocation}
                            className="btn btn-primary"
                        >Submit</button>
                </div>
                </fieldset>
            </form>
        </>
    );
}

export default LocationEditForm