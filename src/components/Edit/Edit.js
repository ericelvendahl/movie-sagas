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
        <br />
        <img
          src={this.state.thisMovie.poster}
          alt={this.state.thisMovie.title}
        ></img>
        <br />
        <br />
        {/* Title edit box */}
        <input type={Text} placeholder={this.state.thisMovie.title}></input>
        <br />
        <br />
        {/* Description edit box */}
        <input type={Text} placeholder={this.state.thisMovie.description}></input>
        <br />
        <br />
        {this.state.thisMovie.array_agg.map((x) => {
          return x + " ";
        })}
        <br />
        <br />
        <button onClick={this.backToListClicked}>Back to list</button>
        <br />
        <button onClick={this.editClicked}>Edit</button>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(withRouter(Edit));
