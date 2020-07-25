const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all movies
// router.get("/", (req, res) => {
//   console.log("GET /api/movie");
//   pool
//     .query('SELECT * from "movies";')
//     .then((result) => {
//       console.log("in /api/movie GET");
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log("Error GET /api/movie", error);
//       res.sendStatus(500);
//     });
// });

// Return movie details (including genre from genres table) based on id
router.get("/:id", (req, res) => {
  console.log("GET /api/details/:id");
  pool
    .query(
      `SELECT "movies"."id", "title", "poster", "description", array_agg("name")
      FROM "movies" 
        JOIN "movies_genres"
        ON "movies"."id"
         = "movie_id"  
          JOIN "genres" 
          ON "genres"."id" = "movies_genres"."genre_id"
          WHERE "movies"."id" = ${req.params.id}
          GROUP BY "movies"."id";`
    )
    .then((result) => {
      // console.log("in /api/details/:id GET. result.rows is ", result.rows);
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.log("Error GET /api/details/:id", error);
      res.sendStatus(500);
    });
});

// // add a new favorite
// router.post("/", (req, res) => {
//   console.log("POST /api/favorite");
//   console.log('req.body.images.original.url: ', req.body.images.original.url)
//   pool
//     .query(`INSERT INTO "favorite" ("name", "url") VALUES ('${req.body.title}', '${req.body.images.original.url}');`)
//     .then((result) => {
//       console.log("in /api/favorite POST");
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log("Error POST /api/favorite", error);
//       res.sendStatus(500);
//     });
// });

// router.put("/", (req, res) => {
//   // return all categories
//   console.log("In favorite router PUT. req.body is", req.body);
//   const queryText = `UPDATE favorite SET category_id = ${req.body.category} WHERE id = ${req.body.id};`; // this should be UPDATE... and update the categories
//   pool
//     .query(queryText)
//     .then((result) => {
//       console.log("in /api/category GET");
//       res.send(result.rows);
//     })
//     .catch((error) => {
//       console.log(`Error on query ${error}`);
//       res.sendStatus(500);
//     });
// });

// // delete a favorite
// router.delete("/", (req, res) => {
//   res.sendStatus(200);
// });

module.exports = router;
