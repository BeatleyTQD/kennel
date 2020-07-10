import React, { useState } from 'react';
import LocationManager from '../../modules/LocationsManager';

const LocationForm = props => {
    const [location, setLocation] = useState({name:"", address:"", picture:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.limestone.edu%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2Fimg_5211.jpg&f=1&nofb=1"})
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = {...location };
        stateToChange[evt.target.id] = evt.target.value
        setLocation(stateToChange);
    };

    const constructNewLocation = evt => {
        evt.preventDefault();
        if (location.name === "" || location.address === "") {
            window.alert("Please input a location name and address")
        } else {
            setIsLoading(true);
            LocationManager.post(location)
                .then(() => props.history.push("/locations"));
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
                        placeholder="Location name"
                    />
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="address"
                        placeholder="Location address"
                    />
                    <label htmlFor="address">Address</label>
                    </div>
                    <div className="alignRight">
                        <button 
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewLocation}
                        >Submit</button>
                    </div>
            </fieldset>
        </form>
        </>
    );
};

export default LocationForm