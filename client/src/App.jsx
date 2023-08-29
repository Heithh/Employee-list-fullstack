import React, { useState, useEffect } from "react";
import axios from 'axios';
import EmployeeList from "./components/EmployeeList.jsx";
import AddEmployee from "./components/AddEmployee.jsx";
import LookEmployee from "./components/LookEmployee.jsx";
import DeleteEmployee from "./components/DeleteEmployee.jsx";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/api/employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Employees</h1>
      <section>
        <h3>Add Employee</h3>
        <AddEmployee employees={employees} setEmployees={setEmployees} />
      </section>
      <section>
        <h3>Look Employee</h3>
        <LookEmployee employees={employees} setEmployees={setEmployees} />
      </section>
      <section>
        <h3>Delete Employee</h3>
        <DeleteEmployee employees={employees} setEmployees={setEmployees} />
      </section>
      <section>
        <h3>Employee List</h3>
        <EmployeeList employees={employees} />
      </section>
    </div>
  );
}

export default App;
