import { ADD_TO_CART, REMOVE_TO_CART, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!state.cart.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
      return state;

    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
