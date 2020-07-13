import React, { useState, useEffect } from 'react';
import OwnerCard from './OwnerCard';
import OwnersManager from '../../modules/OwnersManager';

const OwnerList = props => {
    const [owners, setOwners] = useState([]);

    const getOwners = () => {
        return OwnersManager.getAll().then(ownersFromAPI => {
            setOwners(ownersFromAPI)
        });
    };
    
    const deleteOwner = id => {
        OwnersManager.delete(id)
        .then(() => OwnersManager.getAll().then(setOwners));
    };

    useEffect(() => {
        getOwners();
    }, []);

    return(
        <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push("/owners/new")}}>
                    Hire New Manager
                </button>
        </section>
        <div className="container-cards">
            {owners.map(owner =>
                <OwnerCard 
                    key={owner.id} 
                    owner={owner}
                    deleteOwner={deleteOwner}
                    {...props}
                    />)}
        </div>
        </>
    );
};

export default OwnerList