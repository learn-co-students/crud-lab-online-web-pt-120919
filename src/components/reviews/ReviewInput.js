import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    restaurantId: this.props.restaurantId,
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addReview({
      restaurantId: this.state.restaurantId,
      text: this.state.text
    });
  }

  render() {
    console.log(this.props.id)
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
