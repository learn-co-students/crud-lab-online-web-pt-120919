import React, { Component } from "react";

class Review extends Component {
  handleDelete = () => {
    this.props.deleteReview(this.props.text.id);
  };
  render() {
    return (
      <div>
        <li>{this.props.text.text}</li>
        <button onClick={this.handleDelete}> X </button>
      </div>
    );
  }
}

export default Review;
