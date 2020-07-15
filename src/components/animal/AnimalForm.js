import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import EmployeeManager from "../../modules/EmployeeManager";
import './AnimalForm.css'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: 0, picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.indianaftermarket.com%2Fimages%2Finsert-dog-here%2FIMG_9211%25202.jpg&f=1&nofb=1" });
  const [employees, setEmployees] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };
  const handleEmployeeFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = parseInt(evt.target.value);
    setAnimal(stateToChange);
  };

  EmployeeManager.getAll().then(employees =>{
    setEmployees(employees)});

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
  */
  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "" || animal.employeeId === 0) {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
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
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <select
                className="form-control"
                id="employeeId"
                value={parseInt(animal.employeeId)}
                onChange={handleEmployeeFieldChange}
              > <option>Select an Employee</option>
                {employees.map(employee =>
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                )}
              </select>
              <label htmlFor="employeeId">Employee</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm