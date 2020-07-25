import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";

class Home extends Component {
  getMovies = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };
  render() {
    return (
      <>
        <button onClick={this.getMovies}>Get Movies</button>
        {this.props.reduxState.movies.map((x) => (
          <>
          <MovieItem thisItem={x} key={x.id}/>
          <br />
          </>
        ))}{" "}
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
