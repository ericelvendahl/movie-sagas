import React, { Component } from "react";
import { connect } from "react-redux";
class MovieItem extends Component {
  getMovies = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };
  render() {
    return (
      <>
        <br />
        <img
          src={this.props.thisItem.poster}
          alt={this.props.thisItem.title}
        ></img>
        <br />
        **I am a MovieItem** My title is {this.props.thisItem.title}
        <br />
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(MovieItem);
