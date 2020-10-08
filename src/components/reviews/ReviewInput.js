import React, { Component } from "react";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addReview({
      restaurantId: this.props.restaurantId,
      text: this.state.text
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
