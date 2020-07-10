import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationsManager'

const LocationList = (props) => {
    //intial empty array
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        // after data comes back from the API, setLocations updates the state
        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    //deletes a location card based on the id
    const deleteLocation = id => {
        LocationManager.delete(id)
        .then(() => LocationManager.getAll().then(setLocations));
    };

    //gets the locations from the API on the component's first render
    useEffect(() => {
        getLocations();
    }, []);

    //map() iterates through array of locations and generates a new card for each
    return(
        <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push("/locations/new")}}>
                    Open New Location
                </button>
        </section>
        <div className="container-cards">
            {locations.map(location => 
                <LocationCard 
                key={location.id} 
                location={location} 
                deleteLocation={deleteLocation} />
            )}
        </div>
        </>
    );
};

export default LocationList