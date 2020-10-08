import React, { Component } from "react";
import Review from "./Review";
class Reviews extends Component {
  render() {
    const restReviews = this.props.reviews.filter(
      review => review.restaurantId === this.props.restaurantId
    );
    return (
      <div>
        {restReviews.map(review => {
          return (
            <Review
              key={review.id}
              text={review}
              deleteReview={this.props.deleteReview}
            />
          );
        })}
      </div>
    );
  }
}

export default Reviews;
