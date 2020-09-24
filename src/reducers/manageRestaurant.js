import uuid from "uuid";

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.payload, id: uuid() };
      return { ...state, restaurants: [...state.restaurants, restaurant] };

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(
        restaurant => restaurant.id !== action.payload
      );

      return { ...state, restaurants };

    default:
      return state;
  }
}
