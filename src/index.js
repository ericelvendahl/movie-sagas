import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// sagas
// Create the rootSaga generator function
function* rootSaga() {
  console.log("in rootSaga");
  yield takeEvery("FETCH_MOVIES", fetchMoviesSaga);

  //   -yield takeEvery("FETCH_FAVORITE", getFavoriteSaga);
  yield takeEvery("FETCH_CURRENT_MOVIE", fetchCurrentMovieSaga);
  //   yield takeEvery("ADD_FAVORITE", addFavoriteSaga);
  //   yield takeEvery("DELETE_FAVORITE", deleteFavoriteSaga);
  //   yield takeEvery("CHANGE_CATEGORY", changeCategorySaga);
  //   yield takeEvery("FETCH_CATEGORY", getCategorySaga);
}

function* fetchCurrentMovieSaga(action) {
  console.log("in fetchQueryResultSaga");
  try {
    const response = yield axios.get("/api/details/" + action.payload.id);
    console.log(
      "sending from fetchCurrentMovieSaga: /api/details/ + ",
      action.payload.id
    );
    yield put({ type: "SET_CURRENT_MOVIE", payload: response.data });
  } catch (error) {
    console.log("Error with Get:", error);
  }
}

function* fetchMoviesSaga() {
  try {
    console.log("in fetchMoviesSaga");
    const response = yield axios.get("/api/movie/");
    console.log("In fetchMovies saga. response.data is", response.data);
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch {
    console.log("Error in fetchMoviesSaga");
  }
}

// Reducers
// Used to store details of currently displayed movie
// Used to store movies returned from the server
// Used to store the movie genres

const currentMovie = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

const details = (state = [], action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    genres,
    details,
    movies,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
