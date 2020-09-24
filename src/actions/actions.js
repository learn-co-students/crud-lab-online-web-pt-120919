export const addRestaurant = text => {
  return {
    type: "ADD_RESTAURANT",
    payload: { text }
  };
};

export const deleteRestaurant = id => {
  return {
    type: "DELETE_RESTAURANT",
    payload: { id }
  };
};
