import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => {return <li>{<Restaurant restaurant={restaurant} key={restaurant.id} id={restaurant.id} deleteRestaurant={this.props.deleteRestaurant}/>}</li>})}
      </ul>
    );
  }
};

export default Restaurants;
