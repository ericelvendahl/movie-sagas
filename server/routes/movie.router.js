const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all movies
router.get("/", (req, res) => {
  console.log("GET /api/movie");
  pool
    .query('SELECT * from "movies";')
    .then((result) => {
      console.log("in /api/movie GET");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/movie", error);
      res.sendStatus(500);
    });
});

// Return a movie based on id
router.get("/:id", (req, res) => {
  console.log("GET /api/movie");
  pool
    .query('SELECT * from "movies";')
    .then((result) => {
      console.log("in /api/movie GET");
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /api/movie", error);
      res.sendStatus(500);
    });
});

// Update a movie
router.put("/", (req, res) => {
  // return all categories
  console.log("In movie router PUT. req.body is", req.body);
  const queryText = `UPDATE movies SET title = $1, description = $2 WHERE id = $3;`;
  pool
    .query(queryText, [req.body.title, req.body.description, req.body.id])
    .then((result) => {
      console.log("in /api/movie put. req.body is"), req.body;
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
