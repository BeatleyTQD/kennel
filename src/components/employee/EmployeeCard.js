import React from "react";

const EmployeeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    <span className="card-employeename">{props.employee.name}</span>
                </h3>
                <img src={props.employee.picture} alt="{props.employee.name} the Hedgehog" />
                <p>Hired: {props.employee.hired}</p>
                <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
            </div>
        </div>
    );
};

export default EmployeeCard