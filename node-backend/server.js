const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

const PORT = 8000;

app.use(cors());
app.use(express.json());
// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'node_crud',
  password: '',
});

// List Posts API
app.get("/api/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(rows);   // ONLY response
  });
});

// Create Post
app.post("/api/posts", (req, res) => {
  const {title, body} = req.body;

  db.query("INSERT INTO posts (title, body) values (?,?)", [title, body], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json({id:result.insertId, title:title, body:body})
  });
});
// Details List
app.get("/api/posts/:id", (req, res) => {
  db.query("SELECT * FROM posts WHERE id = ?", [req.params.id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(rows[0]);   // ONLY response
  })
});

// Update Post
app.put("/api/posts/:id", (req, res) => {
  const {title, body} = req.body;

  db.query("UPDATE posts SET title=?, body=? WHERE id=?", [title, body, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json({id:req.params.id, title:title, body:body});
  });
});
// Delete Post
app.delete("/api/posts/:id", (req, res) => {
  db.query("DELETE from posts where id = ?", [req.params.id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({"message": "Post Deleted Successfully"});   // ONLY response
  })
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
