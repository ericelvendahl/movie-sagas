import React, { Component } from "react";
import { connect } from "react-redux";
class MovieItem extends Component {
  getMovies = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };
  render() {
    return <>**I am a MovieItem** My title is {this.props.thisItem.title}</>;
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MovieItem);
