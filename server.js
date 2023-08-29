const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001; // Use environment variable or default to 3001
const connection = require("./queries");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // Parse JSON body

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.get("/api/employees", (req, res, next) => {
  const query = "SELECT * FROM employees";
  connection.query(query, (err, result) => {
    if (err) {
      return next(err); // Pass the error to the error handler
    }
    res.status(200).json(result);
  });
});

app.post("/api/employees", (req, res, next) => {
  const { id, first_name, last_name, city } = req.body;
  const query = "INSERT INTO employees (id, first_name, last_name, city) VALUES (?, ?, ?, ?)";

  connection.query(query, [id, first_name, last_name, city], (err, result) => {
    if (err) {
      return next(err); // Pass the error to the error handler
    }
    res.status(201).json({ message: "Employee added successfully" });
  });
});

app.delete("/api/employees/:id", (req, res, next) => {
  const { id } = req.params;
  const query = "DELETE FROM employees WHERE id = ?";

  connection.query(query, [id], (err, results) => {
    if (err) {
      return next(err); // Pass the error to the error handler
    }
    console.log(`Deleted employee with ID ${id}`);
    res.status(200).json({ message: `Deleted employee with ID ${id}` });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
