import React from "react";

const EmployeeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <img src={props.employee.picture} alt="{props.employee.name} the Hedgehog" />
                <h3>
                    <span className="card-employeename">{props.employee.name}</span>
                </h3>
                <p>Hired: {props.employee.hired}</p>
                <button type="button" onClick={() => { props.history.push(`/employees/${props.employee.id}/details`)}}>Details</button>
                <button type="button" onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>Edit</button>
                <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fire</button>
            </div>
        </div>
    );
};

export default EmployeeCard