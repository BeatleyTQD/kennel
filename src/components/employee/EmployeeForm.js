import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import LocationManager from '../../modules/LocationsManager';

const EmployeeForm = props => {
    const [employee, setEmployee] = useState({name:"", hired:"", locationId:"", picture:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.huffingtonpost.com%2F2016-04-18-1461017575-2008259-new_employees.jpg&f=1&nofb=1"});
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };

    LocationManager.getAll().then(locations => {
        setLocations(locations)});

    const constructNewEmployee = evt => {
        evt.preventDefault();
        if (employee.name === "" || employee.hired === "" || employee.locationId === "") {
            window.alert("Please input an employee name and hire year");
        } else {
            setIsLoading(true);
            EmployeeManager.post(employee)
            .then(() => props.history.push("/employees"));
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
                            placeholder="Employee Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            required
                            onChange={handleFieldChange}
                            id="hired"
                            placeholder="Year Hired"
                        />
                        <label htmlFor="hired">Year Hired</label>
                        <select 
                            className="form-control"
                            id="locationId"
                            value={parseInt(employee.locationId)}
                            onChange={handleFieldChange}
                            >
                                {locations.map(location =>
                                    <option key={location.id} value={location.id}>
                                        {location.name}
                                    </option>
                                )}
                            </select>
                            <label htmlFor="locationId">Location</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={isLoading}
                                onClick={constructNewEmployee}
                                >Submit</button>
                        </div>
                </fieldset>
            </form>
        </>
    );
};

export default EmployeeForm