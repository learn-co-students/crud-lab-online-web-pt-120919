import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";
import { addRestaurant, deleteRestaurant } from "../actions/actions.js";

class RestaurantsContainer extends Component {
  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants
          restaurants={this.props.restaurants}
          deleteRestaurant={deleteRestaurant}
        />
      </div>
    );
  }
}

const mapPropsToState = state => {
  return { restaurants: state.restaurants };
};

export default connect(mapPropsToState, { addRestaurant, deleteRestaurant })(
  RestaurantsContainer
);
