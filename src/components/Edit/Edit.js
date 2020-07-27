import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Edit extends Component {
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
    movieEdits: {
      title: "",
      description: "",
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

  cancelClicked = () => {
    this.props.history.push(`/details/${this.state.thisMovie.id}`);
  };

  handleDescriptionChange = (event) => {
    this.setState({
      movieEdits: { ...this.state.movieEdits, description: event.target.value },
    });
  };

  handleTitleChange = (event) => {
    this.setState({
      movieEdits: { ...this.state.movieEdits, title: event.target.value },
    });
  };

  saveClicked = () => {
    this.props.dispatch({
      type: "UPDATE_MOVIE",
      payload: { ...this.state.movieEdits, id: this.state.thisMovie.id },
    });
    this.props.history.push(`/details/${this.state.thisMovie.id}`);
  };

  render() {
    return (
      <>
        <br />
        <br />
        {/* For debugging:
        {this.state.thisMovie === undefined ? (
          <br />
        ) : (
          JSON.stringify(this.state.movieEdits)
        )} */}
        <h2>Edit Movie</h2>
        <br />
        <img
          src={this.state.thisMovie.poster}
          alt={this.state.thisMovie.title}
        ></img>
        <br />
        <br />
        {/* Title edit box */}
        <label>Title:</label>
        <br />
        <input
          type="text"
          value={this.state.movieEdits.title}
          onChange={this.handleTitleChange}
          placeholder={this.state.thisMovie.title}
        ></input>
        <br />
        <br />
        {/* Description edit box */}
        <label>Description:</label>
        <br />
        <input
          type="text"
          value={this.state.movieEdits.description}
          onChange={this.handleDescriptionChange}
          placeholder={this.state.thisMovie.description}
        ></input>
        <br />
        <br />
        <button onClick={this.cancelClicked}>Cancel</button>
        <button onClick={this.saveClicked}>Save</button>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Edit));
