import React, { Component } from "react";
import ReviewsContainer from "../../containers/ReviewsContainer";

class Restaurant extends Component {
  handleClick = () => {
    console.log(this.props);
    this.props.deleteRestaurant(this.props.restaurant.id);
  };

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleClick}> X </button>
        </li>
      </div>
    );
  }
}

export default Restaurant;
