import React, { useState } from "react";

const LookEmployee = ({ employees, setEmployees }) => {
  const [lookupId, setLookUpId] = useState("");

  const handleLook = (event) => {
    event.preventDefault();
    const foundEmployee = employees.find((emp) => emp.id === parseInt(lookupId, 10));

    if (foundEmployee) {
      setEmployees([foundEmployee]);
    } else {
      // Handle case where employee is not found
      console.log("Employee not found");
    }

    setLookUpId("");
  };

  return (
    <div>
      <h3>Look For Employee</h3>
      <form onSubmit={handleLook}>
        <input
          placeholder="Employee ID"
          value={lookupId}
          onChange={(event) => setLookUpId(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LookEmployee;
