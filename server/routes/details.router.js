const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

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

module.exports = router;
