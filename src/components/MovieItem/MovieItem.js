import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Fade from "react-reveal/Fade";

class MovieItem extends Component {
  componentDidMount() {}
  getMovies = () => {
    this.props.dispatch({ type: "FETCH_MOVIES" });
  };
  goToDetails = () => {
    this.props.history.push(`/details/${this.props.thisItem.id}`);
  };
  render() {
    return (
      <>
        <Fade left>
          <div className="child">
            <img
              src={this.props.thisItem.poster}
              alt={this.props.thisItem.title}
              onClick={this.goToDetails}
            ></img>
            <br />
            {this.props.thisItem.title}
          </div>
        </Fade>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default withRouter(connect(mapReduxStateToProps)(MovieItem));
