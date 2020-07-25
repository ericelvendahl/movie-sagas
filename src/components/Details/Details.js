import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Details extends Component {
  getMovies = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };

  render() {
    return (
      <>
        <br />

        <br />
        **I am a Details**
        <br />
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(Details));
