import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleOnChange = (event) => {
    this.setState({
      // [event.target.name]: event.target.value 
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text} name="text"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
