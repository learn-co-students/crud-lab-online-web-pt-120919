import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(rest => {return <li>{<Restaurant restaurant={rest} key={rest.id} id={rest.id} deleteRestaurant={this.props.deleteRestaurant}/>}</li>})}
      </ul>
    );
  }
};

export default Restaurants;