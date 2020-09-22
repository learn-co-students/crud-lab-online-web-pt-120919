import cuid from 'cuid';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
});

export default rootReducer;

function restaurantsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return [...state, restaurant];

        case 'DELETE_RESTAURANT':
            return state.filter(restaurant => restaurant.id !== action.id);

        default:
            return state;
    }
}

function reviewsReducer(state = [], action) {

    switch (action.type) {

        case 'ADD_REVIEW':
            // const review = {
            //     id: cuid(),
            //     restaurantId: action.review.id,
            //     text: action.review.text
            // }
            // return [...state, review];

            action.review.id = cuid()

            return [...state, action.review]

        case 'DELETE_REVIEW':
            return state.filter(review => review.id !== action.id);

        default:
            return state;
    }
}