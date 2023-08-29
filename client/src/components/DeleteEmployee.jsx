import React, { useState } from "react";
import axios from 'axios';

const DeleteEmployee = ({ employees, setEmployees }) => {
  const [deleteEmployeeId, setDeleteEmployeeId] = useState("");

  const handleDelete = () => {
    const employeeId = parseInt(deleteEmployeeId, 10);

    setEmployees((currentEmp) =>
      currentEmp.filter((emp) => emp.id !== employeeId)
    );

    axios.delete(`/api/employees/${employeeId}`)
      .then((response) => {
        console.log(`Deleted employee with ID ${employeeId}`);
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });

    setDeleteEmployeeId('');
  };

  return (
    <div>
      <h3>Delete An Employee</h3>
      <input
        placeholder="Employee ID"
        value={deleteEmployeeId}
        onChange={(event) => setDeleteEmployeeId(event.target.value)}
      />
      <button type="button" onClick={handleDelete}>Submit</button>
    </div>
  );
};

export default DeleteEmployee;
