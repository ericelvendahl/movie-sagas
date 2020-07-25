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
  yield takeEvery("FETCH_DETAILS", fetchDetailsSaga);
  //   yield takeEvery("ADD_FAVORITE", addFavoriteSaga);
  //   yield takeEvery("DELETE_FAVORITE", deleteFavoriteSaga);
  //   yield takeEvery("CHANGE_CATEGORY", changeCategorySaga);
  //   yield takeEvery("FETCH_CATEGORY", getCategorySaga);
}

function* fetchDetailsSaga(thisMovie) {
  console.log("in fetchQueryResultSaga");
  try {
    const response = yield axios.get("/api/movie/" + thisMovie.id);
    yield put({ type: "SET_DETAILS", payload: response.data });
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
