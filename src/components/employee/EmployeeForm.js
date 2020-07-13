import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeForm = props => {
    const [employee, setEmployee] = useState({name:"", hired:"", picture:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.huffingtonpost.com%2F2016-04-18-1461017575-2008259-new_employees.jpg&f=1&nofb=1"});
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };

    const constructNewEmployee = evt => {
        evt.preventDefault();
        if (employee.name === "" || employee.hired === "") {
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