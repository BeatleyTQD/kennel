import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = props => {
    //The initial state is an empty array
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        //After the data comes back from the API, we use setEmployees to update state
        return EmployeeManager.getAll().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    //deletes an employee card based on if
    const deleteEmployee = id => {
        EmployeeManager.delete(id)
        .then(() => EmployeeManager.getAll().then(setEmployees));
    };

    //got the animals from the API on the component's first render
    useEffect(() => {
        getEmployees();
    }, []);

    //Use map() to iterate through employee array and show a list of employee cards
    return(
        <>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {props.history.push('/employees/new')}}>
                    Hire Employee
                </button>
        </section>
        <div className="container-cards">
            {employees.map(employee => 
                <EmployeeCard 
                    key={employee.id} 
                    employee={employee} 
                    deleteEmployee={deleteEmployee}
                    {...props} />
                )}
        </div>
        </>
    );
};

export default EmployeeList