import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";
import { addReview, deleteReview } from "../actions/actions";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          deleteReview={this.props.deleteReview}
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
        />
      </div>
    );
  }
}

const mapPropsToState = state => {
  return { reviews: state.reviews };
};

export default connect(mapPropsToState, { addReview, deleteReview })(
  ReviewsContainer
);
