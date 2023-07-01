import { ADD_TO_CART, REMOVE_TO_CART, CHECKOUT } from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productID) => ({
  type: REMOVE_TO_CART,
  payload: productID,
});
export const checkout = () => ({
  type: CHECKOUT,
});
