![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)

# PROJECT NAME

## Description

_Weekend Project_

This web app displays a list of movies, their posters, and a brief description.

The information about the movies is stored in an SQL database.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- JavaScript-capable web browser

## Installation

1. Create a database named `saga_movies_weekend`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

How does someone use this application? Tell a user story here.

1. Click on a movie to see its page
2. On the movie's page, you can read a brief description
3. If you would like to edit the title or description you can do so by clicking the 'Edit' button
4. Edits can be cancelled with the 'Cancel' button
5. Click 'Home' at the top of the screen at any time to return to the movie list

## Built With

Node
React
Redux
Redux-saga
Axios
Express
pg

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

Thank you to my friends in the Paxos cohort for their help.

## Support

If you have suggestions or issues, please contact me at https://github.com/ericelvendahl
