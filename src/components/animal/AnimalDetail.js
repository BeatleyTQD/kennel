import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: ""});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          picture: animal.picture
        });
        setIsLoading(false);
      });
  }, [props.animalId]);

  const deleteAnimal = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };


  if (animal.name !== undefined){
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={animal.picture} alt="My Dog" />
          </picture>
          <h3><span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
          <p>{animal.breed}</p>
          <button type="button" disabled={isLoading} onClick={deleteAnimal}>
            Discharge
          </button>
        </div>
      </div>
      )}
     else {
      return <Redirect to="/" />
    }
};

export default AnimalDetail;