import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class MovieItem extends Component {
  getMovies = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };
  goToDetails = () => {
    this.props.dispatch({
      type: "FETCH_CURRENT_MOVIE",
      payload: this.props.thisItem,
    });
    this.props.history.push(`/details/${this.props.thisItem.id}`);
  };
  render() {
    return (
      <>
        <br />
        <img
          src={this.props.thisItem.poster}
          alt={this.props.thisItem.title}
          onClick={this.goToDetails}
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

export default withRouter(connect(mapReduxStateToProps)(MovieItem));
