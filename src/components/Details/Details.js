import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Details extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_CURRENT_MOVIE",
      payload: Number(this.props.match.params.id),
    });
    // this.setState({
    //   thisMovie: this.props.reduxState.currentMovie,
    // });
  }
  state = {
    thisMovie: {
      id: null,
      title: "",
      poster: "",
      description: "",
      name: "",
      array_agg: [],
    },
  };

  componentDidUpdate(previousProps) {
    if (
      this.props.reduxState.currentMovie !==
      previousProps.reduxState.currentMovie
    ) {
      this.setState({
        thisMovie: this.props.reduxState.currentMovie,
      });
    }
  }

  backToListClicked = () => {
    this.props.history.push("/");
  };

  editClicked = () => {
    this.props.history.push(`/edit/${this.state.thisMovie.id}`);
  };

  render() {
    return (
      <>
        {/* {JSON.stringify(this.props.match)} */}
        <br />
        <br />
        {/* For debugging:
        {this.state.thisMovie === undefined ? (
          <br />
        ) : (
          JSON.stringify(this.state.thisMovie)
        )} */}

        <img
          src={this.state.thisMovie.poster}
          alt={this.state.thisMovie.title}
        ></img>
        <br />
        {/* Show movie title */}
        {this.state.thisMovie.title}
        <br />
        <br />
        {/* Show movie description */}
        {this.state.thisMovie.description}
        <br />
        <br />
        Genre:{" "}
        {this.state.thisMovie.array_agg.map((x) => {
          return x + " ";
        })}
        <br />
        <br />
        <button onClick={this.editClicked}>Edit</button>
        <br />
        <button onClick={this.backToListClicked}>Back to list</button>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Details));
