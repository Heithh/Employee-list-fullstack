import React from "react";
import Employee from "./Employee";

const EmployeeList = ({ employees }) => {
  return (
    <div>
      {employees.map((employee) =>
        <Employee key={employee.id} employee={employee} />
      )}
    </div>
  );
};

export default EmployeeList;
