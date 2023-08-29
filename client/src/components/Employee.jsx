import React from "react";

const Employee = ({ employee }) => (
  <div>
    <h3>{employee.first_name}</h3>
    <p>{employee.last_name}</p>
    <p>{employee.city}</p>
  </div>
);

export default Employee;
