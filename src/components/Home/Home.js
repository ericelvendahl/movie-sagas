import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  }
  getMovies = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };
  render() {
    return (
      <>
        <button onClick={this.getMovies}>Get Movies</button>
        {/* map over contents of movies reducer, */}
        {/* creating a movieItem component for each */}
        {this.props.reduxState.movies.map((x, thisKey) => (
          <MovieItem thisItem={x} key={thisKey} />
        ))}
        <br />
        this.props.reduxState.movies is: <br />
        {/* {JSON.stringify(this.props.reduxState.movies)} */}
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);
