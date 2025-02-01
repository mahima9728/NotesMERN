const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(req.params);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
});

const PORT = process.env.PORt || 5000;

app.listen(
  PORT,
  console.log(`Server started on PORT http://localhost:${PORT}/`)
);
