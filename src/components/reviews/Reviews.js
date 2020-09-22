import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map((review, index) => <Review review={review} key={index} delete={this.props.delete}/>)} 
      </ul>
    );
  }
};

export default Reviews;