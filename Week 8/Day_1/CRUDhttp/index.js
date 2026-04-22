const express = require("express");
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Temporary in-memory storage
let notes = [];
let nextId = 1;

/*
  CREATE NOTE
  POST /notes
*/
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required"
    });
  }

  const newNote = {
    id: nextId,
    title: title,
    content: content
  };

  notes.push(newNote);
  nextId++;

  res.status(201).json({
    message: "Note created successfully",
    data: newNote
  });
});

/*
  GET ALL NOTES
  GET /notes
*/
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "All notes fetched successfully",
    data: notes
  });
});

/*
  GET SINGLE NOTE
  GET /notes/:id
*/
app.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  const note = notes.find((item) => item.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  res.status(200).json({
    message: "Note fetched successfully",
    data: note
  });
});

/*
  UPDATE NOTE
  PUT /notes/:id
*/
app.put("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  const note = notes.find((item) => item.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required"
    });
  }

  note.title = title;
  note.content = content;

  res.status(200).json({
    message: "Note updated successfully",
    data: note
  });
});

/*
  DELETE NOTE
  DELETE /notes/:id
*/
app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);

  const noteIndex = notes.findIndex((item) => item.id === id);

  if (noteIndex === -1) {
    return res.status(404).json({
      message: "Note not found"
    });
  }

  const deletedNote = notes.splice(noteIndex, 1);

  res.status(200).json({
    message: "Note deleted successfully",
    data: deletedNote[0]
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});