import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import Zoom from 'react-reveal/Zoom';

class Home extends Component {
  componentDidMount() {
    this.getMovies();
  }
  getMovies = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };
  render() {
    return (
      <><Zoom><div className="parent">
        {/* map over contents of movies reducer, */}
        {/* creating a movieItem component for each */}
        {this.props.reduxState.movies.map((x, thisKey) => (
          <MovieItem thisItem={x} key={thisKey} />
        ))}
        <br />
        </div>
        </Zoom>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(Home);
