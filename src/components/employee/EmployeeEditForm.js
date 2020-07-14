import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationsManager";
import EmployeeManager from "../../modules/EmployeeManager";

const EmployeeEditForm = props => {
    const [employee, setEmployee] = useState({name:"", hired: "", locationId: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([]);

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };

    const updateExistingEmployee = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedEmployee = {
            id: props.match.params.employeeId,
            name: employee.name,
            hired: employee.hired,
            picture: employee.picture,
            locationId: parseInt(employee.locationId)
        };

        EmployeeManager.update(editedEmployee)
            .then(() => props.history.push("/employees"))
    }

    useEffect(() => {
        EmployeeManager.get(props.match.params.employeeId)
            .then(employee => {
                LocationManager.getAll().then(locations => {
                    setLocations(locations)
                })
                setEmployee(employee);
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
                            value={employee.name}
                        />
                        <label htmlFor="name">Employee Name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="hired"
                            value={employee.hired}
                        />
                        <label htmlFor="hired">Year Hired</label>
                        <select 
                            className="form-control"
                            id="locationId"
                            value={employee.locationId}
                            onChange={handleFieldChange}
                        >
                            {locations.map(location => 
                                <option key={location.id} value={location.id}>
                                    {location.name}
                                </option>
                            )}
                        </select>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={isLoading}
                                onClick={updateExistingEmployee}
                                className="btn btn-primary"
                                >Submit</button>                 
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default EmployeeEditForm