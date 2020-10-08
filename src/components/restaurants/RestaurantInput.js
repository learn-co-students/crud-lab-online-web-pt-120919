import React, { Component } from "react";

class RestaurantInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({ text: "" });
  };
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
