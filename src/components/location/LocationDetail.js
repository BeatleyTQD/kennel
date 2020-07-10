import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationsManager';

const LocationDetail = props => {
    const [location, setLocation] = useState({name:"", address:"", picture:""});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        LocationManager.get(props.locationId)
        .then(location => {
            setLocation({
                name:location.name,
                address:location.address,
                picture:location.picture
            });
            setIsLoading(false);
        });
    }, [props.locationId]);

    const handleDelete = () => {
        setIsLoading(true);
        LocationManager.delete(props.locationId).then(() => 
            props.history.push("/locations")
        );
    };

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={location.picture} alt="Location picture" />
                </picture>
                <h3><span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
                <p>{location.address}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Close
                </button>
                </div>
        </div>
    )
}

export default LocationDetail