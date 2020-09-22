import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
    return(
      <ul>
         {this.props.restaurants.map(restaurant => <span key={restaurant.id}><Restaurant restaurant={restaurant} delete={this.props.delete}/></span>)} 
      </ul>
    );
  }
};

export default Restaurants;