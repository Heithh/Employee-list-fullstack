import React, { useState } from "react";
import axios from 'axios';

const AddEmployee = ({ employees, setEmployees }) => {
  const [newEmployee, setNewEmployee] = useState({
    id: null,
    first_name: "",
    last_name: "",
    city: "",
  });

  const handleChange = (target) => {
    const { name, value } = target;
    const parsedValue = name === 'id' ? parseInt(value, 10) : value;
    setNewEmployee((prevData) => ({ ...prevData, [name]: parsedValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployees([...employees, newEmployee]);
    setNewEmployee({
      id: null,
      first_name: "",
      last_name: "",
      city: "",
    });

    axios.post('/api/employees', newEmployee)
      .then((response) => {
        console.log('New employee added:', response.data);
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
  };

  return (
    <div>
      <form>
        <label>Employee ID</label><br/>
        <input
          placeholder="Enter employee id"
          name="id"
          value={newEmployee.id === null ? '' : newEmployee.id}
          onChange={(event) => handleChange(event.target)}
        /><br/>
        <label>Employee First Name</label><br/>
        <input
          placeholder="Enter employee first name"
          name="first_name"
          value={newEmployee.first_name}
          onChange={(event) => handleChange(event.target)}
        /><br/>
        <label>Employee Last Name</label><br/>
        <input
          placeholder="Enter employee last name"
          name="last_name"
          value={newEmployee.last_name}
          onChange={(event) => handleChange(event.target)}
        /><br/>
        <label>Employee City</label><br/>
        <input
          placeholder="Enter employee city"
          name="city"
          value={newEmployee.city}
          onChange={(event) => handleChange(event.target)}
        /><br/>
        <button type="button" onClick={handleSubmit}>Submit</button><br/>
      </form>
    </div>
  );
};

export default AddEmployee;
